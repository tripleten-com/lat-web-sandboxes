const rootElement = document.querySelector('#root');
const isDaylight: boolean = false;

if (rootElement) {
  const root = (ReactDOM as any).createRoot(rootElement);
  root.render(
    (
      <>
        {isDaylight ? (
          <h2>Buenos dias!!</h2>
        ) : (
          <h2>Buenas noches!!</h2>
        )}
      </>
    )
  );
}
