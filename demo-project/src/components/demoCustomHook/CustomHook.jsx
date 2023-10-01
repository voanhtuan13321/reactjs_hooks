import useWindowSize from './useWindowSize';

export default function CustomHook() {
  const windowSize = useWindowSize();

  return (
    <div>
      <h1>Window Size</h1>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
}
