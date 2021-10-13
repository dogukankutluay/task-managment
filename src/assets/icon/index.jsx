const HomeIcon = () => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.925 17.7327C17.925 17.9979 17.8201 18.2523 17.6333 18.4398C17.4466 18.6273 17.1933 18.7327 16.9292 18.7327H0.995834C0.731722 18.7327 0.478428 18.6273 0.291673 18.4398C0.104918 18.2523 2.39707e-07 17.9979 2.39707e-07 17.7327V7.22269C-0.000105044 7.07031 0.0344729 6.91991 0.101093 6.78299C0.167713 6.64608 0.264613 6.52626 0.384392 6.43269L8.35106 0.210694C8.52587 0.0741392 8.74102 0 8.9625 0C9.18397 0 9.39913 0.0741392 9.57394 0.210694L17.5406 6.43269C17.6604 6.52626 17.7573 6.64608 17.8239 6.78299C17.8905 6.91991 17.9251 7.07031 17.925 7.22269V17.7327Z"
        fill="white"
      />
    </svg>
  );
};
const DefaultSpinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        background: 'transparent',
        padding: '0',
      }}
      width={25}
      height={25}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block">
      <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#fff">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.9166666666666666s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={3}
        ry={6}
        width={6}
        height={12}
        fill="#fff"
        transform="rotate(30 50 50)">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.8333333333333334s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={3}
        ry={6}
        width={6}
        height={12}
        fill="#fff"
        transform="rotate(60 50 50)">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.75s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={3}
        ry={6}
        width={6}
        height={12}
        fill="#fff"
        transform="rotate(90 50 50)">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.6666666666666666s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={3}
        ry={6}
        width={6}
        height={12}
        fill="#fff"
        transform="rotate(120 50 50)">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5833333333333334s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={3}
        ry={6}
        width={6}
        height={12}
        fill="#fff"
        transform="rotate(150 50 50)">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={3}
        ry={6}
        width={6}
        height={12}
        fill="#fff"
        transform="rotate(180 50 50)">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.4166666666666667s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={3}
        ry={6}
        width={6}
        height={12}
        fill="#fff"
        transform="rotate(210 50 50)">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.3333333333333333s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={3}
        ry={6}
        width={6}
        height={12}
        fill="#fff"
        transform="rotate(240 50 50)">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.25s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={3}
        ry={6}
        width={6}
        height={12}
        fill="#fff"
        transform="rotate(270 50 50)">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.16666666666666666s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={3}
        ry={6}
        width={6}
        height={12}
        fill="#fff"
        transform="rotate(300 50 50)">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.08333333333333333s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x={47}
        y={24}
        rx={3}
        ry={6}
        width={6}
        height={12}
        fill="#fff"
        transform="rotate(330 50 50)">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};
const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.749"
      height="18.035"
      viewBox="0 0 15.749 18.035">
      <path
        id="Path_451"
        data-name="Path 451"
        d="M-7.9,0l6.774-9.483-6.1-8.552h1.905L.021-10.753l5.292-7.282H7.218L.953-9.483,7.853,0H5.948l-6.1-8.044L-5.948,0Z"
        transform="translate(7.896 18.035)"
        fill="#212950"
      />
    </svg>
  );
};
const LogOutIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path
        d="M14 19v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.576-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.424 0 2.774-.302 4-.838v-2.162zm4-9.592l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z"
        fill={color}
      />
    </svg>
  );
};
const BottomArrow = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path
        d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
        fill={color}
      />
    </svg>
  );
};
const AllTaskIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path
        fill={color}
        d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z"
      />
    </svg>
  );
};
const MyTasksIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path
        fill={color}
        d="M9 19h-4v-2h4v2zm2.946-4.036l3.107 3.105-4.112.931 1.005-4.036zm6.054-9.053l2-2.024v-.887h-4.609l2.609 2.808v.103zm0 12.134v3.955h-16v-16.192l2.666-2.808h-4.666v21h20v-7.98l-2 2.025zm-14.297-11.045h12.651l-3.312-3.569v-.41c.001-1.668-1.352-3.021-3.021-3.021-1.667 0-3.021 1.332-3.021 3l.001.431-3.298 3.569zm6.297-5c.553 0 1 .448 1 1s-.447 1-1 1-1-.448-1-1 .447-1 1-1zm14 7.125l-7.898 7.996-3.202-3.202 7.898-7.995 3.202 3.201z"
      />
    </svg>
  );
};
const MyDepartmanIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path
        fill={color}
        d="M24 20c0 1.104-.896 2-2 2h-2v-16h2c1.104 0 2 .896 2 2v12zm-6-14v16h-18v-16h2v-4h14v4h2zm-15 2h12v-5h-12v5zm2 9v1h2v-1h-2zm2-1v-1h-2v1h2zm1 1v1h2v-1h-2zm2-1v-1h-2v1h2zm1 1v1h2v-1h-2zm-6 2v1h2v-1h-2zm3 0v1h2v-1h-2zm3 0v1h2v-1h-2zm2-3v-1h-2v1h2zm2-6h-12v3h12v-3zm-2-6h-8v1h8v-1zm-2 2h-6v1h6v-1z"
      />
    </svg>
  );
};
const HamburgerMenu = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill-rule="evenodd"
      clip-rule="evenodd">
      <path
        d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
        fill={color}
      />
      <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
    </svg>
  );
};
const DescriptionIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M7 1h17v2h-17v-2zm0 7h17v-2h-17v2zm0 5h17v-2h-17v2zm0 5h17v-2h-17v2zm0 5h17v-2h-17v2zm-5-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 9c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 9c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" />
    </svg>
  );
};
const LogsIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M13 6h-13v-4h13v4zm0 4h-13v4h13v-4zm0 8h-13v4h13v-4zm3-8l4 5.075 4-5.075h-8z" />
    </svg>
  );
};
const TitleIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M18 7v-7h-18v18h6v6h18v-17h-6zm-12 9h-4v-11h14v2h-10v9zm16 6h-14v-10h14v10z" />
    </svg>
  );
};

const ServiceIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 22 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="M4.33405 2.54501C5.36078 1.62529 6.56673 0.928001 7.87605 0.497009C8.25043 0.966033 8.72571 1.34464 9.26657 1.60468C9.80742 1.86472 10.3999 1.9995 11 1.99901C11.6002 1.9995 12.1927 1.86472 12.7335 1.60468C13.2744 1.34464 13.7497 0.966033 14.124 0.497009C15.4334 0.928001 16.6393 1.62529 17.666 2.54501C17.4476 3.10346 17.3577 3.70395 17.403 4.3019C17.4484 4.89985 17.6278 5.47991 17.928 5.99901C18.2276 6.5191 18.6406 6.96496 19.1363 7.30343C19.632 7.6419 20.1976 7.86427 20.791 7.95401C21.0716 9.30291 21.0716 10.6951 20.791 12.044C19.6311 12.222 18.561 12.904 17.928 13.999C17.6277 14.5182 17.4481 15.0985 17.4028 15.6966C17.3574 16.2947 17.4474 16.8954 17.666 17.454C16.6392 18.3734 15.4333 19.0703 14.124 19.501C13.7496 19.0322 13.2742 18.6538 12.7334 18.3939C12.1925 18.134 11.6001 17.9994 11 18C10.3999 17.9995 9.80742 18.1343 9.26657 18.3943C8.72571 18.6544 8.25043 19.033 7.87605 19.502C6.56682 19.0713 5.36087 18.3744 4.33405 17.455C4.5527 16.8964 4.64269 16.2957 4.59733 15.6976C4.55197 15.0995 4.37243 14.5192 4.07205 14C3.77234 13.4801 3.3593 13.0344 2.86363 12.6961C2.36797 12.3579 1.80242 12.1356 1.20905 12.046C0.928364 10.6968 0.928364 9.30423 1.20905 7.95501C1.80251 7.86527 2.36811 7.6429 2.86379 7.30443C3.35946 6.96596 3.77245 6.5201 4.07205 6.00001C4.37228 5.48091 4.55173 4.90085 4.59709 4.3029C4.64245 3.70495 4.55254 3.10446 4.33405 2.54601V2.54501ZM12.5 12.597C12.844 12.4015 13.1458 12.1398 13.3883 11.8271C13.6307 11.5144 13.8088 11.1569 13.9125 10.7751C14.0161 10.3933 14.0433 9.99472 13.9923 9.60238C13.9413 9.21004 13.8132 8.83166 13.6153 8.48903C13.4175 8.14639 13.1539 7.84628 12.8396 7.60595C12.5253 7.36563 12.1666 7.18984 11.7841 7.08871C11.4016 6.98759 11.0029 6.96312 10.6109 7.01672C10.2189 7.07031 9.84136 7.20092 9.50005 7.40101C8.81663 7.80166 8.31942 8.45637 8.11694 9.22225C7.91445 9.98814 8.02312 10.803 8.41923 11.4891C8.81533 12.1752 9.46673 12.6767 10.2313 12.8843C10.9958 13.0918 11.8114 12.9886 12.5 12.597Z"
      />
    </svg>
  );
};
const SearchIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M23.832 19.641l-6.821-6.821c2.834-5.878-1.45-12.82-8.065-12.82-4.932 0-8.946 4.014-8.946 8.947 0 6.508 6.739 10.798 12.601 8.166l6.879 6.879c1.957.164 4.52-2.326 4.352-4.351zm-14.886-4.721c-3.293 0-5.973-2.68-5.973-5.973s2.68-5.973 5.973-5.973c3.294 0 5.974 2.68 5.974 5.973s-2.68 5.973-5.974 5.973z" />
    </svg>
  );
};
const SearchClearIcon = ({ style, click }) => {
  return (
    <svg
      onClick={click}
      className={style}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24">
      <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
    </svg>
  );
};
const DotMenuIcon = ({ click }) => {
  return (
    <svg
      onClick={click}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
    </svg>
  );
};
const CreateTaskIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path
        fill={color}
        d="M18 13.45l2-2.023v4.573h-2v-2.55zm-11-5.45h1.743l1.978-2h-3.721v2zm1.361 3.216l11.103-11.216 4.536 4.534-11.102 11.218-5.898 1.248 1.361-5.784zm1.306 3.176l2.23-.472 9.281-9.378-1.707-1.707-9.293 9.388-.511 2.169zm3.333 7.608v-2h-6v2h6zm-8-2h-3v-2h-2v4h5v-2zm13-2v2h-3v2h5v-4h-2zm-18-2h2v-4h-2v4zm2-6v-2h3v-2h-5v4h2z"
      />
    </svg>
  );
};

export {
  HomeIcon,
  SearchClearIcon,
  SearchIcon,
  CreateTaskIcon,
  DotMenuIcon,
  ServiceIcon,
  AllTaskIcon,
  MyDepartmanIcon,
  LogOutIcon,
  DefaultSpinner,
  TitleIcon,
  MyTasksIcon,
  CloseIcon,
  LogsIcon,
  DescriptionIcon,
  BottomArrow,
  HamburgerMenu,
};
