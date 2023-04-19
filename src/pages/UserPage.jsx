import React from 'react';

function UserPage() {
    return(
        <div className='Profile'>
            <div className="user_backgraund">
            </div>
            <div className='ProfileBlock'>
                <section className='ProfileIcon'>
                    <img className='ProfileIcon_img' src="https://fikiwiki.com/uploads/posts/2022-02/1644991760_4-fikiwiki-com-p-prikolnie-kartinki-pro-kotov-4.jpg" alt="ProfileIcon" />
                </section>
                <section className='ProfileInfo'>
                    <div>
                        <div className='Names'>
                            <p> Name: {`UserName`}</p>
                            <p> Last name: {`UserLastName`}</p>
                        </div>
                        <div className="userStats">
                            <p>COMBO:{`UserCombo`}</p>
                            <p>LEARN HADITS:{`UserLearn`}</p>
                            <p>FIXED HADITS:{`UserFixed`}</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className='InfoGraf'>
                <img src="https://datavizcatalogue.com/RU/metody/images/top_images/SVG/potokovyj_grafik.svg" alt="grapfick" />
            </div>
        </div>
    );
}

export {UserPage};