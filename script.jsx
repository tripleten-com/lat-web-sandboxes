const root = ReactDOM.createRoot(document.querySelector("#root"));

function ConfirmationDialog(props) {
  return (
    <div className="dialog">
      <div className="dialog__body">{props.children}</div>
      <button onClick={props.onConfirm}>Confirmar</button>
      <button onClick={props.onCancel}>Cancelar</button>
    </div>
  );
}

function App() {
  return (
    <ConfirmationDialog
      onConfirm={() => alert("¡Pedido confirmado!")}
      onCancel={() => alert("¡Pedido cancelado!")}
    >
      ¿Realmente quieres hacer este pedido? {/* ← Esta es props.children */}
    </ConfirmationDialog>
  );
}

root.render(<App />);