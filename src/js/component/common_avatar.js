/*
* @Author: Administrator
* @Date:   2018-03-30 15:42:24
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-30 16:43:09
*/

import React from 'react';
import { Upload, Icon, Modal } from 'antd';

export default class CommonAvatar extends React.Component {
    constructor() {
        super();
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }]
        }
    }
    ;
    handleCancel() {
        this.setState({
            previewVisible: false
        });
    }
    ;
    handlePreview(file) {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }
    ;
    handleChange({fileList}) {
        this.setState({
            fileList
        })
    }
    ;

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            listType: 'picture-card',
            defaultFileList: [
                {
                    uid: -1,
                    name: 'xxx.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                }
            ],
            onPreview: (file) => {
                this.setState({
                    previewImage: file.url,
                    previewVisible: true
                });
            }
        };
        const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
        );
        return (
            <div className="clearfix">
                <Upload {...props}>
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal
            visible={previewVisible}
            footer={null}
            onCancel={this.handleCancel}>
                            <img alt="example" style={{
                width: '100%'
            }} src={previewImage} />
                        </Modal>
            </div>
        );
    }
    ;
}
;