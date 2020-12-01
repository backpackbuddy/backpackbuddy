import React from 'react';

function Banner(props) {
    return (
        <header {...props}>
            <p className="text-center my-1 container">
                Info Lowongan Magang <strong>PT. Siung Amerta Mandiri</strong>
                <a className="text-primary" href="https://forms.gle/gfj5Fj4NzSnVdbmf9" target="_blank" rel="noreferrel"> klik disini</a>
            </p>
        </header>
    );
}

export default Banner;
