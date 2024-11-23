import React from "react";
import sm_img from '../../assest/Pixel art wallpapers.jpeg';
import sm_img2 from '../../assest/HD Desktop Wallpaper.jpeg';
import Image from "next/image";

const Page = () => {
    return (
        <div>
            <h1>Image is shown here</h1>
            <Image src={sm_img} alt="Pixel art wallpapers" />
            <Image src={sm_img2} alt="HD Desktop Wallpaper" width={500}/>
        </div>
    );
}
export default Page;