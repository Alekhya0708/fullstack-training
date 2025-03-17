import './App.css';
const Nutrition =()=>{
    return (
        <div className="nutrition">
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table class="tbl">
            <tbody>
              <tr>
                <td>Calories</td>
                <td class="cal">277kcal</td>
              </tr>
              <tr>
                <td>Crabs</td>
                <td class="cal">0g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td class="cal">20g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td class="cal">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
    );
}

export default Nutrition;