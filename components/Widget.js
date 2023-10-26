import { useState } from "react";
import Head from "next/head";

function Widget({pageName}) {
    const [active, setActive] = useState(false)

    if(active) {
        return (
            <>
                <Head>
                    <title> {pageName} 입니다.</title>
                </Head>
                <div>
                    <button onClick={() => setActive(false)}>
                        오리지널 타이틀
                    </button>
                    타이틀 확인
                </div>
            </>
        );
    }
    return (
        <>
            <but0ton onClick={() => setActive(true)}>
                이 앞, 타이틀 유효
            </but0ton>
        </>
    );
}

export default Widget;