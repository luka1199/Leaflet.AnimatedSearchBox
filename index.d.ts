/// <reference types="leaflet" />

import * as L from 'leaflet';

declare module 'leaflet' {
  namespace Control {

    interface AnimatedSearchBoxOptions {
      class?: string;
      id?: string;
      position?: string;
      expand?: string;
      collapsed?: boolean;
      width?: string;
      iconPath?: string;
      autocompleteFeatures?: string[]; // 'setValueOnClick', 'setValueOnHover'
      clearItemsOnClickItem?: boolean;
    }

    export class AnimatedSearchBox extends L.Control {
      constructor(options?: AnimatedSearchBoxOptions);
      getValue(): string;
      setValue(value: string): this;
      addItem(item: string): this;
      addItems(items: string[]): this;
      setItems(dataList: string[]): this;
      clearItems(): this;
      hide(): this;
      show(): this;
      toggle(): this;
      isCollapsed(): boolean;
      clearInput(): this;
      clear(): this;
      onInput(event: string, callBack: Function): this;
      onButton(event: string, callBack: Function): this;
      offButton(event: string, callBack: Function): this;
      onAutocomplete(event: string, callBack: Function): this;
      offAutocomplete(event: string, callBack: Function): this;
    }
  }

  namespace control {
    export function searchbox(options?: Control.AnimatedSearchBoxOptions): Control.AnimatedSearchBox;
  }
}