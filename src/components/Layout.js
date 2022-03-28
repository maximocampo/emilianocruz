import React from "react"
import {Space} from "antd";

export default ({ children }) => {
  return (
    <div className="site-wrapper">
      <Space direction="vertical" className="sidenav">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
      </Space>
        {children}
    </div>
  )
}
