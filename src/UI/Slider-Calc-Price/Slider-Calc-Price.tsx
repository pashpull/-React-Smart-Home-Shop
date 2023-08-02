import './Slider-Calc-Price.scss';

const SliderCalcPrice = () => {
  // toDo - надо бы это только для сенсорных экранов оставить
  // const sliderControlHandler = (e: any) => {
  //   const control = e.currentTarget;

  //   const firstPos = e.pageX;

  //   const controlStartPos = control.style.left
  //     ? +control.style?.left.replace('px', '')
  //     : 10;

  //   document.onmousemove = (e: any) => {
  //     const actualControlPos = controlStartPos + (e.pageX - firstPos);

  //     if (actualControlPos >= 10 && actualControlPos <= 142) {
  //       control.style.left = actualControlPos + 'px';
  //     }
  //   };

  //   document.onmouseup = () => {
  //     if (+control.style?.left.replace('px', '') < 137) {
  //       const int = setInterval(() => {
  //         if (+control.style?.left.replace('px', '') <= 10) {
  //           clearInterval(int);
  //           control.style.left = '10px';
  //         }
  //         control.style.left =
  //           +control.style?.left.replace('px', '') - 2 + 'px';
  //       }, 1);
  //     } else {
  //       control.style.left = '142px';
  //     }
  //     document.onmousemove = null;
  //     document.onmouseup = null;
  //   };
  // };

  return (
    <div className="slider-calc-price">
      <div
        className="slider-calc-price__control"
        // onMouseDown={sliderControlHandler}
      >
        <span className="slider-calc-price__arrow-top"></span>
        <span className="slider-calc-price__arrow-bot"></span>
      </div>
      <span className="slider-calc-price__text">Рассчитать стоимость</span>
    </div>
  );
};

export default SliderCalcPrice;
