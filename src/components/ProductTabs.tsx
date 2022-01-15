import React, { BaseSyntheticEvent, useState } from "react";
import {
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import style from "styles/components/ProductsTabs.module.scss";
import { TabPanel } from "./TabPanel";

function ProductTabs() {
  const { tab, onTabChange, onIndexChange, tabProps, contentRows } =
    useProductTabs();
  return (
    <>
      <Tabs className={style.tabs} value={tab} onChange={onTabChange}>
        <Tab className={style.tab} label="Opis" {...tabProps("opis")} />
        <Tab className={style.tab} label="Sastojci" {...tabProps("sastojci")} />
      </Tabs>
      <SwipeableViews
        animateHeight
        index={Number(tab) || 0}
        onChangeIndex={onIndexChange}
        className={style.swipeableView}
      >
        <TabPanel className={style.tabContent} value={tab} index={0}>
          <p>
            Kolač namjenjen za proslave svih vrsta. Ukrašen raznim vrstama
            čokolade i čokoladnih mrvica koja mu daju izazovan izgled.
            Napravljen je od bezglutenske čokolade i domaćeg biskvita. Moguće je
            dobiti personaliziranu poruku na kolaču.
          </p>
        </TabPanel>
        <TabPanel className={style.tabContent} value={tab} index={1}>
          <TableContainer component={Paper}>
            <Table aria-label="content-table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Sastojak</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Količina</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contentRows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </SwipeableViews>
    </>
  );
}

function useProductTabs() {
  const [tab, setTab] = useState<string | number>(0);
  const onTabChange = (e: BaseSyntheticEvent, newValue: string | number) => {
    setTab(newValue);
  };
  const onIndexChange = (index: number) => {
    setTab(index);
  };
  const tabProps = (index: string) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  const contentRows = [
    {
      name: "Jaja",
      count: "5",
    },
    {
      name: "Šećer",
      count: "4 žlice",
    },
    {
      name: "Vanilin šećer",
      count: "1 vrećica",
    },
    {
      name: "Brašno",
      count: "5 žlica",
    },
    {
      name: "Kakao",
      count: "3 žlice",
    },
  ];

  return { tab, onTabChange, onIndexChange, tabProps, contentRows };
}

export default ProductTabs;
