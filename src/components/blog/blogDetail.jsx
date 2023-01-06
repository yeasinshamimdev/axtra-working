import Link from "next/link";

export default function BlogDetail() {
    return (
        <section className="blog__detail">
            <div className="container g-0 line pt-140">
                <span className="line-3"></span>
                <div className="row">
                    <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
                        <div className="blog__detail-top">
                            <h2 className="blog__detail-date animation__word_come">Design, Marketing <span>25 Jan 2019</span></h2>
                            <h3 className="blog__detail-title animation__word_come">Donate your design for newest designers to try
                                better
                            </h3>
                            <div className="blog__detail-metalist">
                                <div className="blog__detail-meta">
                                    <img src="assets/imgs/blog/detail/author.png" alt="Author Picture" />
                                    <p>Writen by <span>Codexpand</span></p>
                                </div>
                                <div className="blog__detail-meta">
                                    <p>Viewed <span>3 min read</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="blog__detail-thumb">
                            <img src="assets/imgs/blog/detail/1.jpg" alt="Blog Thumbnail" data-speed="0.5" />
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
                        <div className="blog__detail-content">
                            <p>We love to bring designs to life as a developer, and I aim to do this using whatever front end
                                tools are necessary. My preferred tools are more modern javascript libraries like React.js but I
                                like to use whatever is best for the websites needs. There are several reasons why a business would
                                consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful. </p>
                            <p>But in order that you may see whence all this born error of those who accuse pleasure and praise
                                pain, I will open the whole matter, and explain the very things which were said by that discoverer
                                of truth and, as it were, the architect of a happy life.</p>
                            <img src="assets/imgs/blog/detail/2.jpg" alt="Blog Image" />
                            <h2>JavaScript</h2>
                            <p>We love to bring designs to life as a developer, and I aim to do this using whatever front end
                                tools are necessary. My preferred tools are more modern javascript libraries like React.js but I
                                like to use whatever is best for the websites needs. There are several reasons why a business would
                                consider a rebrand and it doesn’t necessarily mean the business has been unsuccessful.</p>
                            <h2>Fremework</h2>
                            <p>Always ready to push the boundaries, especially when it comes to our own platform, Our analytical
                                eye to create a site that was visually engaging and also optimised for maximum performance. It also
                                perfectly reflects the journey to help it tell a story to increase its understanding and drive
                                action. To create a site that was visually engaging for maximum performance.</p>
                            <ul>
                                <li>Brand Development</li>
                                <li>UX/UI Design</li>
                                <li>Front-end Development</li>
                                <li>Copywriting</li>
                                <li>Shopify Development</li>
                            </ul>
                            <h2>Visual Studio</h2>
                            <p>Just like other pseudo-elements and pseudo-class selectors, :not() can be chained with other
                                pseudo-classes and pseudo-elements. For example, the following will add a “New!” word to list items
                                that do not have a .old class name, using the ::after pseudo-element:</p>
                            <img src="assets/imgs/blog/detail/3.jpg" alt="Code" />
                        </div>
                        <div className="blog__detail-tags">
                            <p className="sub-title-anim">tags: <Link href="/tag">design</Link>, <Link href="/tag">figma</Link>,
                                <Link href="/tag">update</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}