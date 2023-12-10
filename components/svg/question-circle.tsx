import { FC } from 'react';

import { SVGProps } from './svg.types';

const QuestionCircleSVG: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_1767_4513)">
      <path
        d="M6.97473 4.66634C6.49484 4.66634 6.09014 4.99455 5.97559 5.43962L5.83019 6.00454L4.70034 5.71374L4.84574 5.14881C5.08974 4.20081 5.94962 3.49967 6.97473 3.49967C8.1888 3.49967 9.17301 4.48388 9.17301 5.69795C9.17301 6.35763 8.8589 6.79997 8.50126 7.14788C8.34936 7.29565 8.17621 7.43919 8.01363 7.57397C7.99505 7.58938 7.9766 7.60467 7.95834 7.61984C7.77326 7.77361 7.59064 7.92808 7.41005 8.10642L6.995 8.51631L6.17522 7.68621L6.59027 7.27632C6.80914 7.06018 7.02494 6.87854 7.21279 6.72247C7.23042 6.70783 7.24769 6.6935 7.26462 6.67945C7.43498 6.53807 7.57111 6.4251 7.68776 6.31162C7.92514 6.0807 8.00634 5.92082 8.00634 5.69795C8.00634 5.12821 7.54447 4.66634 6.97473 4.66634Z"
        fill="currentColor"
      />
      <path
        d="M6.39931 9.33301H7.57181V10.4997H6.39931V9.33301Z"
        fill="#1B1B1F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.583496 6.99967C0.583496 3.45585 3.45634 0.583008 7.00016 0.583008C10.544 0.583008 13.4168 3.45585 13.4168 6.99967C13.4168 10.5435 10.544 13.4163 7.00016 13.4163C3.45634 13.4163 0.583496 10.5435 0.583496 6.99967ZM7.00016 1.74967C4.10067 1.74967 1.75016 4.10018 1.75016 6.99967C1.75016 9.89917 4.10067 12.2497 7.00016 12.2497C9.89966 12.2497 12.2502 9.89917 12.2502 6.99967C12.2502 4.10018 9.89966 1.74967 7.00016 1.74967Z"
        fill="#1B1B1F"
      />
    </g>
    <defs>
      <clipPath id="clip0_1767_4513">
        <rect width="14" height="14" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default QuestionCircleSVG;
