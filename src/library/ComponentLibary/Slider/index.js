import React, { PureComponent } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";

import "./index.less";

export default class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.swiper = null;
    this.timeout = null;
  }

  initSwiper = (nextProps = this.props) => {
    const { speed, loop, paginationActiveColor, isAutoplay } = nextProps.config;
    let autoplay = false;
    console.log("isAutoplay", isAutoplay);

    if (isAutoplay) {
      autoplay = {
        delay: 1000,
        disableOnInteraction: false
      };
    }
    console.log("auto", autoplay);
    this.timeout && clearTimeout(this.timeout);
    this.swiper = new Swiper(".swiper-container", {
      on: {
        slideChangeTransitionStart: () => {
          this.timeout = setTimeout(function() {
            const bullets = document.querySelectorAll(
              ".swiper-pagination-bullet"
            );

            bullets.forEach(node => {
              node.style.backgroundColor = "";
            });
            const activeBullet = document.querySelector(
              ".swiper-pagination-bullet-active"
            );
            activeBullet.style.backgroundColor = paginationActiveColor;
          }, 0);
        }
      },
      autoplay,
      pagination: {
        el: ".swiper-pagination"
      },
      loop,
      speed: speed * 1000
    });
  };

  componentDidMount() {
    this.initSwiper();
    this.changeStyle(this.props);
  }
  componentWillReceiveProps(nextProps) {
    const {
      loop,
      speed,
      paginationActiveColor,
      isAutoplay
    } = this.props.config;
    const {
      loop: newLoop,
      speed: newSpeed,
      paginationActiveColor: newPaginationActiveColor,
      isAutoplay: newIsAutoplay
    } = nextProps.config;
    if (
      loop !== newLoop ||
      speed !== newSpeed ||
      paginationActiveColor !== newPaginationActiveColor ||
      isAutoplay !== newIsAutoplay
    ) {
      this.initSwiper(nextProps);
    }
    this.changeStyle(nextProps);
  }

  changeStyle = props => {
    const { paginationWidth } = props.config;
    const bullets = document.querySelectorAll(".swiper-pagination-bullet");

    bullets.forEach(node => {
      node.style.width = paginationWidth + "px";
      node.style.height = paginationWidth + "px";
    });
  };
  render() {
    const {
      paginationBottom,
      moduleColor,
      insidePadding,
      outsidePadding,
      style: { backgroundColor, backgroundImage },
      imgs = []
    } = this.props.config;
    return (
      <div
        style={{
          backgroundColor: moduleColor,
          backgroundImage: `url(${backgroundImage})`,
          padding: outsidePadding
        }}
      >
        <div
          className="pd-box"
          style={{ backgroundColor, padding: insidePadding }}
        >
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {imgs.map(img => (
                <img
                  key={img}
                  className={`swiper-img swiper-slide`}
                  src={img}
                  alt=""
                />
              ))}
            </div>
            <div
              className="swiper-pagination"
              style={{ bottom: paginationBottom }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
