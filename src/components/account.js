import React, { useState } from "react";
import groomAccountData from "../assets/groom_account_number_data.json";
import brideAccountData from "../assets/bride_account_number_data.json";
import AccountModal from "./accountModal";

const Account = () => {
    const [clickedAccountData, setClickedAccountData] = useState(null);
    const [copiedAccount, setCopiedAccount] = useState(null);

    const accountClick = (account_data) => {
        setClickedAccountData(account_data);
    };

    return <div>
        <div className='congratulatory-section'>
            <div className='congratulatory-section-text'>마음 전하실 곳</div>
            <div
                className='congratulatory-section-btn'
                onClick={() => accountClick(groomAccountData)}>신랑측 계좌번호
            </div>
            <div
                className='congratulatory-section-btn'
                onClick={() => accountClick(brideAccountData)}>신부측 계좌번호
            </div>
        </div>
        {clickedAccountData && <AccountModal
            clickedAccountData={clickedAccountData}
            setClickedAccountData={setClickedAccountData}
            copiedAccount={copiedAccount}
            setCopiedAccount={setCopiedAccount}
        />}
    </div>
}

export default Account;