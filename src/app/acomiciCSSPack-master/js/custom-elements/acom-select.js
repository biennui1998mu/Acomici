(function() {
	const KEYCODE = {
		SPACE: 32,
		DOWN: 40,
		UP: 38,
	};

	class acomSelect extends HTMLElement{
		static get observedAttributes() {
			return ['disabled'];
		}
		constructor(){
			super();
			this._selectOption = this._selectOption.bind(this);
			this.attachShadow({mode: 'open'});
		}

		connectedCallback() {

			this._upgradeProperty('disabled');
			this.addEventListener('keyup', this._onKeyUp);
			this.addEventListener('click', this._onClick);
		}

		disconnectedCallback() {
			this.removeEventListener('keyup', this._onKeyUp);
			this.removeEventListener('click', this._onClick);
		}

		_upgradeProperty(prop) {
			if (this.hasOwnProperty(prop)) {
				let value = this[prop];
				delete this[prop];
				this[prop] = value;
			}
		}

		set disabled(value) {
			const isDisabled = Boolean(value);
			if (isDisabled)
				this.setAttribute('disabled', '');
			else
				this.removeAttribute('disabled');
		}

		get disabled() {
			return this.hasAttribute('disabled');
		}

		attributeChangedCallback(name, oldValue, newValue) {
			const hasValue = newValue !== null;
			switch (name) {
				case 'checked':
					this.setAttribute('aria-checked', hasValue);
					break;
				case 'disabled':
					this.setAttribute('aria-disabled', hasValue);
	}


	window.customElements.define('acom-select', acomSelect);
})();