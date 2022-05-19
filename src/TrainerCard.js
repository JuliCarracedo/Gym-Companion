import React from 'react';
import { SmallCard } from './StyledComponents/styledComponents';

const TrainerCard = () => (
  <SmallCard className="small-card">
    <h2>My Trainer</h2>
    <svg className="icon" version="1.1" viewBox="0 0 297 297">
      <path d="M49.836,213.635c15.434,15.435,35.98,23.827,57.799,23.557c43.853-0.485,79.529-37.081,79.529-81.577v-27.99c0-4.837,3.922-8.759,8.76-8.759h92.677c4.631,0,8.399-3.767,8.399-8.398v-25.76c0-4.631-3.768-8.399-8.399-8.399H137.695V107.6c0,6.047-4.903,10.949-10.949,10.949c-6.047,0-10.949-4.903-10.949-10.949V76.308h-7.938c-44.495,0-81.091,35.676-81.578,79.528C26.038,177.675,34.404,198.202,49.836,213.635z" />
      <path d="M16.767,118.283c2.949-6.766,6.649-13.143,10.995-19.029c-3.421-1.301-5.863-4.606-5.863-8.478c0-5.004,4.072-9.076,9.076-9.076c3.461,0,6.474,1.949,8.004,4.807c5.279-5.059,11.119-9.547,17.418-13.359c-5.597-8.052-14.894-13.346-25.422-13.346C13.895,59.802,0,73.697,0,90.777C0,102.736,6.818,113.125,16.767,118.283z" />
    </svg>
  </SmallCard>
);

export default TrainerCard;
