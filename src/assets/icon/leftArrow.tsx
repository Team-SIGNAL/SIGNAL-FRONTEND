function LeftArrow({ width = "360px", color="black" }: { width?: string; color?: string }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 360 336"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M168 312L24 168L168 24M44 168L336 168"
        stroke={color}
        stroke-width="48"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default LeftArrow;
