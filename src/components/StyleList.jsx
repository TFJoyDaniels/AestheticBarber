import { Styles } from "./Styles";
import "./StyleList.css";
export function StyleList() {
  return (
    <section className="stylelist">
      <Styles
        img={
          "https://th.bing.com/th?id=OIP.B0CJpbWlGDfBr8tt2elVxwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        }
        name={"Corte"}
        price={"200"}
      />
      <Styles
        img={
          "https://th.bing.com/th?id=OIP.Pv_EONYO260HTt1CM9a_BgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        }
        name={"Cortecito barato"}
        price={"5000"}
      />
      <Styles
        img={
          "https://th.bing.com/th?id=OIP.Q1x7I1qKb_8BjNpQfzGE9gHaHJ&w=254&h=245&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        }
        name={"????"}
        price={5}
      />
    </section>
  );
}
