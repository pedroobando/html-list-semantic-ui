const ListaItem = ({ vtaItem, accionAdd, accionDelete }) => {
  const { List, Button, Label } = semanticUIReact;

  const { name, price, datevta, id } = vtaItem;
  return (
    <List.Item key={id}>
      <List.Content floated="right">
        <Label content={name} />
        <Button circular icon="plus" onClick={() => accionAdd(id)} />
        <Button circular icon="trash alternate" onClick={() => accionDelete(id)} />
      </List.Content>

      <List.Content>
        {datevta}
        <strong style={{ marginLeft: "2em" }}>${price}</strong>
      </List.Content>
    </List.Item>
  );
};
