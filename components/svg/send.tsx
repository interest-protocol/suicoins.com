import { FC } from 'react';

import { SVGProps } from './svg.types';

const Send: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M18.3402 7.32013L4.34025 0.320128C3.78774 0.0451374 3.16386 -0.0527612 2.55368 0.03978C1.9435 0.132321 1.37671 0.410798 0.930579 0.837244C0.484451 1.26369 0.1807 1.81735 0.0607402 2.42274C-0.0592199 3.02813 0.0104488 3.65578 0.260247 4.22013L2.66025 9.59013C2.7147 9.71996 2.74275 9.85934 2.74275 10.0001C2.74275 10.1409 2.7147 10.2803 2.66025 10.4101L0.260247 15.7801C0.0569475 16.2368 -0.0289969 16.7371 0.0102245 17.2355C0.0494459 17.7339 0.21259 18.2145 0.484829 18.6338C0.757069 19.0531 1.12977 19.3977 1.56907 19.6363C2.00837 19.875 2.50033 20 3.00025 20.0001C3.46848 19.9955 3.92974 19.8861 4.35025 19.6801L18.3502 12.6801C18.8468 12.4303 19.2643 12.0474 19.5559 11.5742C19.8476 11.101 20.0021 10.556 20.0021 10.0001C20.0021 9.44424 19.8476 8.89928 19.5559 8.42605C19.2643 7.95282 18.8468 7.56994 18.3502 7.32013H18.3402ZM17.4502 10.8901L3.45025 17.8901C3.26641 17.9784 3.05998 18.0084 2.85863 17.976C2.65729 17.9436 2.47066 17.8504 2.32376 17.709C2.17686 17.5675 2.07673 17.3845 2.03678 17.1846C1.99683 16.9846 2.01897 16.7772 2.10025 16.5901L4.49025 11.2201C4.52119 11.1484 4.5479 11.075 4.57025 11.0001H11.4602C11.7255 11.0001 11.9798 10.8948 12.1674 10.7072C12.3549 10.5197 12.4602 10.2653 12.4602 10.0001C12.4602 9.73491 12.3549 9.48056 12.1674 9.29302C11.9798 9.10549 11.7255 9.00013 11.4602 9.00013H4.57025C4.5479 8.9253 4.52119 8.85184 4.49025 8.78013L2.10025 3.41013C2.01897 3.22309 1.99683 3.01568 2.03678 2.8157C2.07673 2.61572 2.17686 2.43273 2.32376 2.29128C2.47066 2.14982 2.65729 2.05666 2.85863 2.02428C3.05998 1.9919 3.26641 2.02186 3.45025 2.11013L17.4502 9.11013C17.6141 9.19405 17.7515 9.32154 17.8475 9.47857C17.9435 9.63561 17.9943 9.81608 17.9943 10.0001C17.9943 10.1842 17.9435 10.3647 17.8475 10.5217C17.7515 10.6787 17.6141 10.8062 17.4502 10.8901Z"
      fill="currentColor"
    />
  </svg>
);

export default Send;
