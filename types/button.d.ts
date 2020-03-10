import Vue from 'vue';

export declare class Button extends Vue {
  /**
   * 按钮类型，可选值为 default、primary、dashed、text、info、success、warning、error或者不设置
   * @default default
   */
  type?: '' | 'default' | 'primary' | 'dashed' | 'text' | 'info' | 'success' | 'warning' | 'danger';
  /**
   * 按钮大小，可选值为large、small、default mini或者不设置
   * @default default
   */
  size?: '' | 'large' | 'default' | 'small' | 'mini';
  /**
   * 设置按钮的图标类型
   */
  icon?: string;
  /**
   * 设置button原生的type，可选值为button、submit、reset
   * @default button
   */
  'native-type'?: 'button' | 'submit' | 'reset';
  /**
   * 设置按钮为加载中状态
   * @default false
   */
  loading?: boolean;
  /**
   * 加载中自定义图标
   */
  'loading-icon'?: string;
  /**
   * 设置按钮为禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否是浅色模式
   * @default false
   */
  plain?: boolean;
  /**
   * 是否是圆形按钮
   * @default false
   */
  round?: boolean;
  /**
   * 透明属性，使按钮背景透明
   * @default false
   */
  transparent?: boolean;
}
