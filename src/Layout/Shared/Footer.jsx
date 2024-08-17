const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-cyan-900 text-primary-content p-10">
                <aside>
                    <img className="inline-block fill-current"
                     src="https://i.postimg.cc/XJ8qypbS/prime1.png" alt="prime picks logo" />
                    <p className="font-bold">
                    <span className="edu text-3xl">Prime Picks Ltd.</span>
                    <br />
                    Providing reliable medical service since 1998
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    
                </aside>
                <nav>
                    <p className="mb-1">Contact us </p>
                    <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/JannatulAfrozFaria">
                        <svg
                        xmlns="http://www.w3.org/1999/xlink"
                        width="24"
                        height="24"
                        viewBox="0 0 64 64"
                        className="fill-current">
                        <path
                            d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"></path>
                            
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@Archetype_Vision">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100000633748736">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;