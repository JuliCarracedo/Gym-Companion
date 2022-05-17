import React from 'react';
import { BlueSmallCard } from './StyledComponents/styledComponents';

const RoutinesCard = () => (
  <BlueSmallCard className="routines-card">
    <h2>Routines</h2>
    <svg className="icon" version="1.1" viewBox="0 0 472.615 472.615">
      <path d="M454.157,207.697h-20.765v-55.651h-57.312v-50.204h-57.311v105.855H153.846V101.842H96.535v50.204H39.223v55.651H18.457C8.264,207.697,0,215.96,0,226.154v20.305c0,10.193,8.264,18.457,18.457,18.457h20.766v55.56l57.312,0.065v50.233h57.221V264.916h165.014v105.858h57.311v-50.207h57.312v-55.651h20.765c10.195,0,18.459-8.264,18.459-18.457v-20.305C472.615,215.96,464.351,207.697,454.157,207.697z" />
    </svg>
  </BlueSmallCard>
);

export default RoutinesCard;
