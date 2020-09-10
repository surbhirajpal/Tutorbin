import React from 'react'
import './style.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import File1 from '../Files/file1.jpg'
import File2 from '../Files/file2.txt'
import File3 from '../Files/file3.jpg'
import File4 from '../Files/file4.pdf'
import File5 from '../Files/file5.jpg'
import File6 from '../Files/file6.docx'
import File7 from '../Files/file7.mp4'
import BlackThumb from '../Files/docThumb.png'
import { Icon, Modal } from 'antd';
import { Carousel } from 'react-responsive-carousel';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const files = [File1, File2, File3, File4, File5, File6, File7]
        return (
            <div className="main">
                <Carousel
                    showIndicators={false}
                    infiniteLoop={true}
                >
                    {
                        files.map((item, index) => {
                            const ext = item.split('.').pop();
                            console.log(ext)
                            if (ext == 'jpg') {
                                return (
                                    <div key={index}>
                                        <div className="buttons">
                                            <a href={item} download><Icon type="download" /></a>
                                            <Icon type="delete" onClick={this.showModal} />
                                        </div>
                                        <img src={item} />
                                    </div>
                                )
                            }
                            else if (ext == 'txt' || ext == 'pdf') {
                                return (
                                    <div key={index} className="iframe">
                                        <div className="buttons">
                                            <a href={item} download><Icon type="download" /></a>
                                            <Icon type="delete" onClick={this.showModal} />
                                        </div>
                                        <img src={BlackThumb} />
                                        <div className="document">
                                        <object data={item} type='application/pdf'></object>
                                        </div>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div className="exception" key={index}>
                                        <div className="buttons">
                                            <a href={item} download><Icon type="download" /></a>
                                            <Icon type="delete" onClick={this.showModal} />
                                        </div>
                                        <img src={BlackThumb} />
                                        <div className="document">
                                            <p>Cannot display files of {ext} format. Please download</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </Carousel>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    centered
                    closable={false}
                >
                    <p>Are you sure you want to delete this file?</p>
                </Modal>
            </div>
        )
    }
}

export default Main