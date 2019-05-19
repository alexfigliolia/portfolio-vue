
export default class ButtonMethods {
	constructor() {
	  this.data = {
			rotX: 0,
			rotY: 0,
			bTransDur: 0.5,
			scale: 1,
			boxShadow: 'none'
		};
		this.left = null;
		this.top = null;
		this.height = null;
		this.width = null;
		this.mathX = null;
		this.mathY = null;
		this.getCachedTargetData = this.getCachedTargetData.bind(this);
		this.getType = this.getType.bind(this);
		this.getRotations = this.getRotations.bind(this);
		this.setFrame = this.setFrame.bind(this);
		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseMove = this.mouseMove.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
	}
	
	getCachedTargetData(target) {
		if(!this.left || !this.y || !this.height || !this.width) {
			const { left, top } = target.getBoundingClientRect();
			const { offsetWidth, offsetHeight } = target;
			this.left = left;
			this.top = top;
			this.height = offsetHeight;
			this.width = offsetWidth;
			this.mathX = this.left + (this.width / 2);
			this.mathY = this.top + (this.height / 2);
		}
	}

	getType(type, touches, clientX, clientY) {
		const isMouse = type.substring(0, 5) === 'mouse';
		return {
			y: isMouse ? clientY : touches[0].clientY,
			x: isMouse ? clientX : touches[0].clientX,
		}
	}

	getRotations({ x, y }) {
		let rotX = (this.mathY - y) / 1.75;
		return {
			rotX: rotX > 0 ? rotX+=4 : rotX,
			rotY: (this.mathX - x) / -10,
		}
	}

	setFrame({ rotX, rotY }, duration) {
		this.data.rotX = rotX;
		this.data.rotY = rotY; 
		this.data.bTransDur = `${duration}s`, 
		this.data.scale = 1.1;
		this.data.boxShadow = `0 14px 28px rgba(0,0,0,0.5), ${rotY* -1.85}px ${rotX}px 10px rgba(0,0,0,0.44)`;
	}

	mouseEnter({ type, clientX, clientY, target, touches }) {
		this.getCachedTargetData(target);
		this.setFrame(
			this.getRotations(
				this.getType(type, touches, clientX, clientY)
			), 0.5);
	}

	mouseMove({ type, clientX, clientY, touches }) {
		this.setFrame(
			this.getRotations(
				this.getType(type, touches, clientX, clientY)
			), 0);
	}

	mouseLeave() {
		this.data.rotX = 0;
		this.data.rotY = 0; 
		this.data.bTransDur = '0.5s';
		this.data.scale = 1; 
		this.data.boxShadow = 'none';
	}
}