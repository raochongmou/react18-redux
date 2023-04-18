import React, { PureComponent } from "react";
import { connect } from "react-redux";

export class About extends PureComponent {
  render() {
    const { banners, recommends, goodsList } = this.props;
    return (
      <div>
        <h2>轮播图:</h2>
        {banners.map(item =>
          <li key={item.title}>
            {item.title}
          </li>
        )}
        <h3>推荐:</h3>
        {recommends.map(item =>
          <li key={item.title}>
            {item.title}
          </li>
        )}
        <h4>商品列表:</h4>
        {goodsList.map(item =>
          <li key={item.id}>
            {item.name}
          </li>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  banners: state.banners,
  recommends: state.recommends,
  goodsList: state.goodsList
});

export default connect(mapStateToProps, null)(About);
