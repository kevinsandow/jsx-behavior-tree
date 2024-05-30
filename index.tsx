function jsx(tag: Function, props: Record<string, unknown>, ...children: Function[]) {
    return () => tag({ ...props, children });
}

const blackboard = {
    tick: 1
}

function Selector({ children }: { children: Function[] }) {
    return children.reduce((memo, child) => memo || child(), false)
}

function FizzBuzz() {
    if (blackboard.tick % 15 !== 0) {
        return false
    }

    console.log('FizzBuzz');
    return true;
}

function Fizz() {
    if (blackboard.tick % 3 !== 0) {
        return false
    }

    console.log('Fizz');
    return true;
}

function Buzz() {
    if (blackboard.tick % 5 !== 0) {
        return false
    }

    console.log('Buzz');
    return true;
}

function RegularNumber() {
    console.log(blackboard.tick);
    return true;
}

function Demo() {
    return (
        <Selector>
            <FizzBuzz />
            <Fizz />
            <Buzz />
            <RegularNumber />
        </Selector>
    );
}

const tree = Demo()

for (; blackboard.tick <= 37; blackboard.tick++) {
    // console.log('tick', blackboard.tick)
    tree()
}
