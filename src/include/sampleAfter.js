const sampleJs={
  methods:{	
    
		example1(price)
		{
			
			let pig = 0;
			let cat =  this.example2(this.$refs.cat.value);
			let bird = parseFloat(this.props.bird);			
			pig = bird;
			let val = pig + ((price - bird) / (parseFloat(cat)/100));    
			val = Math.floor(val);
			return val;
		},
		example2() 
		{
			let price =  this.example3(this.$refs.price.value)*1 ;
			let amount =  this.example3(price);
			if (price > 10)   {
				this.$refs.foo.value =  this.example4(amount);
			}
			else	 {
				this.$refs.foo.value =  0 ; 
			}
		}, 
		example3()
		{
			let banana = parseFloat(this.$refs.banana.value); 
			let melon = parseFloat(this.props.melon);
			let apple = this.example4(this.$refs.apple.value);


			if (melon >= banana && apple < kiwi) {
				this.$refs.melon.style.backgroundColor = "#fff0f0";
				this.$refs.apple.style.backgroundColor = "#fff0f0";
				this.$refs.melon.style.color = "#000000";
				this.$refs.apple.style.color = "#000000";
			}
			else {
				this.$refs.melon.style.backgroundColor = "#ffffff";
				this.$refs.apple.style.backgroundColor = "#ffffff";
				this.$refs.melon.style.color = "#000000";
				this.$refs.apple.style.color = "#000000";
			}
		},
	}
}
export default sampleJs;	