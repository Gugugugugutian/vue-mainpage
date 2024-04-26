 <template>
    <div class="t003">
        <h2>汇率查询</h2>
        <input type="number" v-model="amount" :placeholder="selectedCurrency" :value="amount">
        <ul style="list-style: none; user-select: none;">
          <li style="user-select: none; font-size: 2vh;">{{ log }}</li>
            <li v-for="obj in Currency" style="display: block;">
                <input type="radio" v-model="selectedCurrency" :value="obj" :id="obj">
                <label :for="obj">{{ obj }}: {{ convertedAmounts[obj] }}</label>
            </li>
        </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        amount: 1,
        rates: {},
        convertedAmounts: {
          'CNY': 0.000,
          'HKD': 0.000,
          'USD': 0.000,
          'JPY': 0.000,
          'GBP': 0.000
        },
        selectedCurrency: 'HKD',
        Currency: ['CNY', 'HKD', 'USD', 'JPY', 'GBP'],
        log: "汇率未获取",
      }
    },
    watch: {
      amount() {
          this.convertCurrency();
      },
      selectedCurrency() {
          this.convertCurrency();
      }
    },
    mounted() {
      this.fetchRate();
    },
    methods: {
      convertCurrency() {
        const rate = this.rates[this.selectedCurrency];
        for (let currency in this.convertedAmounts) {
          this.convertedAmounts[currency] = (this.amount * this.rates[currency] / rate).toFixed(3);
        }
      },
      updateDate() {
        let now = new Date();
        return now.toLocaleDateString();
      },
      async fetchRate() {
        try {
          const response = await fetch('https://v6.exchangerate-api.com/v6/ce99b55cf60f1adcde528962/latest/CNY');
          const data = await response.json();

          this.rates = data.conversion_rates;
          this.convertCurrency();
          this.log = "汇率更新于" + this.updateDate();
          console.log('[Toolkit #002] Finished. Currency convertion rate: 1CNY = ' + this.rates['USD'] + 'USD. ');
        }
        catch (err) {
          this.log = err;
          console.error("Error fetching exchange rates:", err);
        }
      },
    }
  }
  </script>
  
  <style>
  .t003 {
    text-align: center;
    font-size: large;
  }
  .t003 input[type="number"] {
    height: 4vh;
    width: 80%;
    font-size: 3.5vh;
  }
  .t003 label {
    font-size: large;
  }
    .t003 input[type="radio"]:checked + label {
      color: dodgerblue;
    }
  </style>
  