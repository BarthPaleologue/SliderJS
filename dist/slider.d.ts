export declare class Slider {
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
    constructor(id: string, parent: HTMLElement, min: number, max: number, initialValue: number, onSlide?: (val: number) => void);
    /**
     * Increment slider value and execute callback if not told otherwise
     * @param useCallback enable or disable callback execution
     */
    increment(useCallback?: boolean): void;
    /**
     * Decrement slider value and execute callback if not told otherwise
     * @param useCallback enable or disable callback execution
     */
    decrement(useCallback?: boolean): void;
    /**
     * Get slider's value as a number
     * @returns the number associated to slider's value
     */
    getValue(): number;
    /**
     * Set Slider's value and execute callback if not told otherwise
     * @param value the slider's new value
     * @param useCallback enable or disable callback execution
     */
    setValue(value: number, useCallback?: boolean): void;
    /**
     * Changes handle value and position to match slider value and execute callback if not told otherwise
     * @param useCallback enable or disable callback execution
     */
    update(useCallback?: boolean): void;
    /**
     * Resets slider to its initial state and execute callback if not told otherwise
     * @param useCallback enable or disable callback execution
     */
    reset(useCallback?: boolean): void;
    /**
     * Remove every HTML element related to the Slider
     */
    remove(): void;
}
