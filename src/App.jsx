import './App.css';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Box from './components/Box';

export default function App() {
  const paragraph_title = "Transactions history";
  const paragraph_body = "These are your monthly and daily actions.";
  const tr_title_today = "TODAY";
  const tr_title_month = "LAST MONTH";
  const tr_title_year = "LAST YEAR";
  const tr_number_today = "3";
  const tr_number_month = "35";
  
  return (
    <div className="App">
      <Header/>
      <Paragraph 
        title={paragraph_title} 
        body={paragraph_body}
      />
      <section className="box-container">
        <Box title={tr_title_month}>
          <p>{tr_number_month}</p>
        </Box>
        <Box title={tr_title_today}>
          <p>{tr_number_today}</p>
        </Box>
        <Box title={tr_title_year}>
        </Box>
      </section>
    </div>
  );
}
