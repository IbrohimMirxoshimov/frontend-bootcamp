import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Button, Checkbox, Collapse } from "antd";
import { useState } from "react";

function SideFilter({ filter }) {
  return (
    <div>
      <Collapse
        defaultActiveKey={["nimadir"]}
        items={filter.map((item) => {
          return {
            key: item.id,
            label: (
              <span>
                <span className="font-bold">{item.name}</span>
                <span className="text-gray-500 ml-2">{item.count}</span>
              </span>
            ),
            children: <SideFilterValues values={item.values} />,
          };
        })}
      />
    </div>
  );
}

function SideFilterValues({ values }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {values.length > 10 && expanded === false ? (
        <div>
          {values.slice(0, 10).map((value) => {
            return (
              <div key={value.id}>
                <Checkbox>
                  {value.value} ({value.count})
                </Checkbox>
              </div>
            );
          })}
        </div>
      ) : (
        values.map((value) => {
          return (
            <div key={value.id}>
              <Checkbox>
                {value.value} ({value.count})
              </Checkbox>
            </div>
          );
        })
      )}
      {values.length > 10 ? (
        <Button
          onClick={() => {
            setExpanded(!expanded);
          }}
          icon={expanded ? <CaretUpOutlined /> : <CaretDownOutlined />}
        >
          {expanded ? "Yopish" : "Ko'proq ko'rsatish"}
        </Button>
      ) : null}
    </div>
  );
}
export default SideFilter;
