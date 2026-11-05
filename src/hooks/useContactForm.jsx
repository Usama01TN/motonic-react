import { useRef, useState } from "react";

// Same rules & messages as the original jquery.validate setup.
const RULES = {
    name: (v) => (v.trim().length >= 2 ? null : "Please enter your name"),
    email: (v) => (v.trim() ? null : "Please enter your email address"),
    phone: (v) => (v.trim() ? null : "Please enter your phone number"),
    address: (v) => (v.trim() ? null : "Please enter your address"),
};

// Set VITE_CONTACT_ENDPOINT in .env to POST the form somewhere real (was mail.php).
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

/**
 * Validation + submit state for the contact / appointment forms.
 * Usage: const { onSubmit, errors, status } = useContactForm();
 */
export default function useContactForm() {
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const timer = useRef();

    const flash = (s) => {
        setStatus(s);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setStatus("idle"), 3000);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const next = {};
        Object.entries(RULES).forEach(([field, rule]) => {
            if (form.elements[field]) {
                const msg = rule(String(data.get(field) ?? ""));
                if (msg) next[field] = msg;
            }
        });
        setErrors(next);
        if (Object.keys(next).length) return;

        setStatus("sending");
        try {
            if (ENDPOINT) {
                const res = await fetch(ENDPOINT, { method: "POST", body: data });
                if (!res.ok) throw new Error(res.statusText);
            } else {
                await new Promise((r) => setTimeout(r, 600)); // demo mode
            }
            form.reset();
            flash("success");
        } catch {
            flash("error");
        }
    };

    const clearError = (e) => {
        const { name } = e.target;
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    return { onSubmit, errors, status, clearError };
}

export function FieldError({ message }) {
    return message ? <label className="error">{message}</label> : null;
}
