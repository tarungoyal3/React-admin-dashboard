import "./featured.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredchart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={4}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$300</p>
        <p className="desc">
            Last payments are not included.
        </p>

        <div className="summary">
            <div className="item">
                <div className="itemtitle">Target</div>
                <div className="itemresult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize = "small"/>
                    <div className="resultamount">$150.0k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemtitle">Last Week</div>
                <div className="itemresult negative">
                    <KeyboardArrowDownIcon fontSize = "small"/>
                    <div className="resultamount">$80.0k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemtitle">Last Month</div>
                <div className="itemresult positive">
                    <KeyboardArrowUpOutlinedIcon fontSize = "small"/>
                    <div className="resultamount">$100.5k</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
