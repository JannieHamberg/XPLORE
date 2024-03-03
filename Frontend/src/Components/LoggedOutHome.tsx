
export const LoggedOutHome = () => {
    return (
        <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="diff-bg-purple text-primary-content text-9xl font-black grid place-content-center ">
            <img className="diff-img-2 mx-8" src="../../Images/img2_purple.png" alt="" />
            </div>
          
        </div>
        <div className="diff-item-2">
          <div className="bg-base-100 text-9xl font-black grid place-content-center">
          <img className="diff-img-1 mx-8" src="../../Images/img1_white.png" alt="" />
           {/*  <div className="w-100 h-100">
          <p className="intro-txt-1">image</p>
          <p >search</p>
          <p>engine.</p>
          </div> */}
            </div>

        </div>
        <div className="diff-resizer"></div>
      </div>
    )
}