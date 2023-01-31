declare type TimeString =
`${ number }${
	"hs" |
	"ts" |
	"s" |
	"m" |
	"h" |
	"d"
}` | number;

export default TimeString;