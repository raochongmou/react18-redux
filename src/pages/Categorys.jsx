import { PureComponent } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  changeBanners,
  changeRecommends,
  fetchGoodsList
} from "../store/actions";

export class Category extends PureComponent {
  componentDidMount() {
    const { changeBanners, changeRecommends, fetchGoodsList } = this.props;
    // axios.get("/static/data.json").then(res => {
    //   console.log("res", res);
    // });
    fetchGoodsList();
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      console.log("resmultidata", res);
      const banners = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      changeBanners(banners);
      changeRecommends(recommend);
    });
  }
  render() {
    const { goodsList } = this.props;
    console.log("goodsList", goodsList);
    return (
      <div>
        <h1>商品列表:</h1>
        {goodsList.map(item =>
          <li key={item.id}>
            {item.name}
          </li>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeBanners: banners => dispatch(changeBanners(banners)),
  changeRecommends: recommends => dispatch(changeRecommends(recommends)),
  fetchGoodsList: () => dispatch(fetchGoodsList())
});

const mapStateToProps = state => ({
  goodsList: state.goodsList
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
