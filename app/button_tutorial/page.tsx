'use client';

const handleClick = () => {
    console.log("button clicked");
}

const BT = () => {
    return (
        <button onClick={handleClick}>
            ボタン
        </button>
    );
};

export default BT;