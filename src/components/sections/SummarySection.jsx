
import ProfileImage from '../../assets/images/myprofile-modified.jpeg';

function SummarySection() {
    return (
        <>
        <div style={{ height: '100vh', padding: '2rem' }} className='container-fluid'>
            <div className="row d-flex justify-content-between">
                <div className="col-6" style={{ fontFamily: 'Poppins' }}>
                    <div className="outline-div">
                        <span style={{ fontFamily: 'NeueMagnat' }} className='outline'>I turn your ideas into <span style={{ fontFamily: 'NeueMagnat' }} className='bold'>creative impact!</span></span>
                    </div>
                    <p style={{ fontFamily: 'Poppins', fontSize: '24px' }}>
                        With expertise in both front-end and back-end development, I bring your vision to life by crafting seamless, high-performance web applications. From designing intuitive user interfaces to building robust server-side logic, I ensure a smooth, efficient, and secure digital experience. Whether it's developing custom APIs, optimizing database structures, or deploying scalable cloud solutions, I bridge the gap between innovation and functionality. Let's build something extraordinary together!
                    </p>
                </div>
                <div className="col-6">
                    <div class="glitch" style={{ display: "flex", justifyContent: "center" }}>
                        <img src={ProfileImage} style={{ width: '50%' }} alt="" />
                        <div class="glitch__layers">
                            <div class="glitch__layer"></div>
                            <div class="glitch__layer"></div>
                            <div class="glitch__layer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)

}

export default SummarySection;