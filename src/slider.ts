export class Slider {
    id: string;
    parent: HTMLElement;
    container: HTMLElement;
    slider: HTMLInputElement;
    handle: HTMLElement;
    min: number;
    max: number;
    initialValue: number;
    onSlide: (val: number) => void;

    /**
     * Creates a new Slider with a unique ID, a Parent Node, min and max value, initial value and callback
     * @param id Slider HTML id used to define internal HTML elements
     * @param parent Parent HTML container
     * @param min Slider min value
     * @param max Slider max value
     * @param initialValue Slider initial value
     * @param onSlide Slider onSlide callback
     */
    constructor(
        id: string,
        parent: HTMLElement,
        min: number,
        max: number,
        initialValue: number,
        onSlide = (val: number) => {
            return;
        },
    ) {
        this.min = min;
        this.max = max;
        this.initialValue = initialValue;
        this.onSlide = onSlide;
        this.id = id;
        this.parent = parent;

        const container = document.createElement('div');
        container.setAttribute('id', `${id}SliderContainer`);
        container.setAttribute('class', 'sliderContainer');
        this.container = container;

        const handle = document.createElement('span');
        handle.setAttribute('id', `${id}SliderHandle`);
        handle.setAttribute('class', 'sliderHandle');
        handle.innerText = String(initialValue);
        this.handle = handle;
        container.appendChild(handle);

        const slider = document.createElement('input');
        slider.setAttribute('id', `${id}Slider`);
        slider.setAttribute('class', 'sliderElement');
        slider.setAttribute('type', 'range');
        slider.setAttribute('min', String(min));
        slider.setAttribute('max', String(max));
        slider.setAttribute('value', String(initialValue));
        this.slider = slider;
        container.appendChild(slider);

        this.parent.appendChild(container);

        this.update(false);

        slider.addEventListener('input', () => this.update());

        window.addEventListener('resize', () => this.update(false));
    }

    /**
     * Increment slider value and execute callback if not told otherwise
     * @param useCallback enable or disable callback execution
     */
    increment(useCallback = true) {
        this.slider.value = String(this.getValue() + 1);
        if (useCallback) this.update();
    }

    /**
     * Decrement slider value and execute callback if not told otherwise
     * @param useCallback enable or disable callback execution
     */
    decrement(useCallback = true) {
        this.slider.value = String(this.getValue() - 1);
        if (useCallback) this.update();
    }

    /**
     * Get slider's value as a number
     * @returns the number associated to slider's value
     */
    getValue(): number {
        return Number(this.slider.value);
    }

    /**
     * Set Slider's value and execute callback if not told otherwise
     * @param value the slider's new value
     * @param useCallback enable or disable callback execution
     */
    setValue(value: number, useCallback = true) {
        this.slider.value = String(value);
        if (useCallback) this.update();
    }

    /**
     * Changes handle value and position to match slider value and execute callback if not told otherwise
     * @param useCallback enable or disable callback execution
     */
    update(useCallback = true) {
        this.handle.innerText = this.slider.value;
        const handlePosition =
            ((this.getValue() - this.min) / (this.max - this.min)) *
            (1 - this.handle.clientWidth / (1 * this.slider.clientWidth));
        this.handle.style.marginLeft = `${handlePosition * 100}%`;
        if (useCallback) this.onSlide(this.getValue());
    }

    /**
     * Resets slider to its initial state and execute callback if not told otherwise
     * @param useCallback enable or disable callback execution
     */
    reset(useCallback = true) {
        this.setValue(this.initialValue, useCallback);
    }

    /**
     * Remove every HTML element related to the Slider
     */
    remove() {
        this.container.remove();
    }
}
