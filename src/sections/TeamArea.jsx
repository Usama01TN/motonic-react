import { team } from "../data/site";

export default function TeamArea() {
    return (
        <div className="hx-team-area section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title-s2 text-center">
                        <span>Meet Our Expertise</span>
                        <h2>Our Awesome Team</h2>
                    </div>
                </div>
                <div className="row">
                    {team.map((m) => (
                        <div className="col-md-3 col-sm-6 col-12 col-g" key={m.name}>
                            <div className="hx-team-single">
                                <div className="hx-team-img">
                                    <img src={m.img} alt={m.name} />
                                    <div className="SocialIcons">
                                        {m.socials.map((s) => (
                                            <a href={s.href} key={s.icon}>
                                                <i className={`fa ${s.icon}`}></i>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="profileInfo">
                                        <h3>{m.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
