import Sidebar from "./Sidebar";
import Content from "./Content";

import Typewriter from 'typewriter-effect';

import { useEffect, useState } from "react";

const Layout = () => {

    const [loading, setLoading] = useState(true);


    if (!loading) {
        return (
            <div id="site" className="bg-primary text-white d-flex">
                <div className="Sidebar d-none d-xl-block col-2 border-end border-info">
                    <Sidebar />
                </div>
                <div id="fullcontent" className="Content col-12 col-xl-10">
                    <Content />
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="init-screen Content bg-primary">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .pasteString('davidriz.hu/portfolio > ')
                        .typeString(' <span class="orange">npm</span> strat')
                            .deleteChars(3)
                            .typeString('art')
                            .typeString('<p>')
                            .pauseFor(3000)
                            .callFunction(() => {
                                setLoading(false)
                             })
                            .start();
                    }}
                />
            </div>)
    }
}

export default Layout;