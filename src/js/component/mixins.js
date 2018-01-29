/*
 * @Author: Administrator
 * @Date:   2018-01-29 14:07:50
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-01-29 14:51:37
 */

const MixinLog = {
	componentDidMount() {
		console.log('component did mount');
	},
	log() {
		console.log('here is the mixin...');
	}
}

export default MixinLog;