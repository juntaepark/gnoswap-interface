import React from "react";
import DashboardInfo from "@components/dashboard/dashboard-info/DashboardInfo";

export interface DashboardTokenInfo {
  gnosAmount: string;
  gnotAmount: string;
}

const initialDashboardTokenInfo: DashboardTokenInfo = {
  gnosAmount: "$0.7425",
  gnotAmount: "$1.8852",
};

export interface SupplyOverviewInfo {
  totalSupply: string;
  circulatingSupply: string;
  progressBar: string;
  dailyBlockEmissions: string;
  totalStaked: string;
  stakingRatio: string;
}

const initialSupplyOverviewInfo: SupplyOverviewInfo = {
  totalSupply: "1,000,000,000 GNOS",
  circulatingSupply: "218,184,885 GNOS",
  progressBar: "580 GNOS",
  dailyBlockEmissions: "580 GNOS",
  totalStaked: "152,412,148 GNOS",
  stakingRatio: "55.15%",
};

export interface GovernenceOverviewInfo {
  totalXgnosIssued: string;
  holders: string;
  passedProposals: string;
  activeProposals: string;
  communityPool: string;
}

const initialGovernenceOverviewInfo: GovernenceOverviewInfo = {
  totalXgnosIssued: "59,144,225 xGNOS",
  holders: "14,072",
  passedProposals: "125",
  activeProposals: "2",
  communityPool: "2,412,148 GNOS",
};

const DashboardInfoContainer: React.FC = () => {
  return (
    <DashboardInfo
      dashboardTokenInfo={initialDashboardTokenInfo}
      supplyOverviewInfo={initialSupplyOverviewInfo}
      governenceOverviewInfo={initialGovernenceOverviewInfo}
    />
  );
};

export default DashboardInfoContainer;