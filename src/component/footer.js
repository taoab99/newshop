import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row footer-border">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 footer-col" >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-box">
                            <h2>HỖ TRỢ KHÁCH HÀNG</h2>
                            <ul>
                                <li><a href="#">hostline & hỗ trợ trực tuyến </a></li>
                                <li><a href="#">trung tâm hỗ trợ</a></li>
                                <li><a href="#">hướng dẫn đặt hàng</a></li>
                                <li><a href="#">giao hàng & nhận hàng</a></li>
                                <li><a href="#">hướng dẫn đổi trả</a></li>
                                <li><a href="#">báo cáo</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-box">
                            <h2>GIẢI ĐÁP</h2>
                            <ul>
                                <li><a href="#">về công ty </a></li>
                                <li><a href="#">điều khoản sử dụng</a></li>
                                <li><a href="#">chính sách bảo mật</a></li>
                                <li><a href="#">báo chí</a></li>
                                <li><a href="#">giải quyết khiếu nại</a></li>
                                <li><a href="#"> hoàn tiền</a></li>
                                <li><a href="#">hướng dẫn thanh toán</a></li>
                                <li><a href="#">giấy chứng nhận</a></li>
                                <li><a href="#">vấn đề khác</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 .footer-right">
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                         <h2 style={{textAlign: 'left'}}>Go where your heart beats</h2>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 margin">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Available_on_the_App_Store_%28black%29.png" className="anh"/>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" className="anh"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 footer-right">
                                <p>CÔNG TY TNHH RECESS</p>
                                <p>Giấy CNĐKDN: 0308808576 – Ngày cấp: 06/5/2009, được sửa đổi lần thứ 19 ngày 15/8/2019.</p>
                                <p>Cơ quan cấp: Phòng Đăng ký kinh doanh – Sở kế hoạch và Đầu tư TP.HCM</p>
                                <p>Địa chỉ đăng ký kinh doanh: Tầng 19, Tòa nhà Saigon Centre – Tháp 2, 67 Lê Lợi, Phường Bến Nghé, Quận 1, Tp. Hồ Chí Minh, Việt Nam.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Footer;
