const { Fragment, useState } = React;
const { Grid, Segment, Header, Icon, Form, Input, List, Image, Button } = semanticUIReact;

const initialState = [
  { id: 1, datevta: "2021-03-01 14:45:11", price: 312.1, name: "carmen" },
  { id: 2, datevta: "2021-03-01 14:45:11", price: 12.05, name: "ana" },
  { id: 3, datevta: "2021-04-01 14:45:11", price: 156.0, name: "juan" },
  { id: 4, datevta: "2021-03-01 14:45:11", price: 95.05, name: "manuel" },
  { id: 5, datevta: "2021-04-01 14:45:11", price: 35.2, name: "tomas" },
  { id: 6, datevta: "2021-03-01 14:45:11", price: 212.3, name: "francisco" },
  { id: 7, datevta: "2021-05-01 14:45:11", price: 53.0, name: "pedro" },
];

const App = () => {
  const [counter, setCounter] = useState(0);
  const [lista, setLista] = useState(initialState);

  const handleUnClick = () => {
    setCounter((e) => e - 1);
  };

  const handleAccionAdd = (id) => {
    setLista([...lista, lista.find((vta) => vta.id === id)]);
    // alert(id);
  };

  const handleAccionReload = () => {
    setLista(initialState);
  };

  const handleAccionDelete = (id) => {
    setLista([...lista.filter((vta) => vta.id !== id)]);
  };

  const sumElement = (key, thisArray) => {
    return thisArray.reduce((a, b) => a + (b[key] || 0), 0);
  };

  return (
    <Fragment>
      <Header as="h2">Lista :</Header>
      <Segment attached="top" secondary>
        <Header as="h3" color="grey">
          <Icon color="teal" name="list alternate outline" />
          <Header.Content>Borradores de Venta</Header.Content>
        </Header>
        <Form>
          <Form.Field>
            <Input
              type="date"
              name="searchdate"
              placeholder="Indique la fecha"
              style={{ width: "90%" }}
            />
            <Button
              icon="redo"
              color="teal"
              style={{ marginLeft: "0.2em" }}
              onClick={handleAccionReload}
            />
          </Form.Field>
        </Form>
      </Segment>
      <Segment attached="middle">
        <List divided verticalAlign="middle">
          {lista.map((vta) => (
            <ListaItem
              vtaItem={vta}
              accionAdd={handleAccionAdd}
              accionDelete={handleAccionDelete}
            />
          ))}
        </List>
      </Segment>
      <Segment attached="bottom">
        <Header as="h3">
          <Header.Content>
            <Grid columns={2} style={{ width: "100%" }}>
              <Grid.Column width={10}>
                <Icon name="tasks" color="teal" />
                count: {lista.length}
              </Grid.Column>
              <Grid.Column width={6}>Total: {sumElement("price", lista)}</Grid.Column>
            </Grid>
          </Header.Content>
        </Header>
      </Segment>
    </Fragment>
  );
};
