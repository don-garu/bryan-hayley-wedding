import AccountInfo from "./accountInfo";


const accountModal = ({clickedAccountData, setClickedAccountData, copiedAccount, setCopiedAccount}) => {

    const accountClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedAccountData(null);
            setCopiedAccount(null);
            document.body.style.overflow = '';
        }
    };

    return <>
        <div className="overlay dismiss" onClick={accountClick}>
            <div className="account-popup">
                <AccountInfo
                    title={`${clickedAccountData.title} 계좌`}
                    accountData={clickedAccountData.data}
                    copiedAccount={copiedAccount}
                    setCopiedAccount={setCopiedAccount}
                ></AccountInfo>
                <AccountInfo
                    title={"혼주 계좌"}
                    accountData={clickedAccountData.parents}
                    copiedAccount={copiedAccount}
                    setCopiedAccount={setCopiedAccount}>
                </AccountInfo>
                {copiedAccount !== null && <div className="copy-success">복사되었습니다.</div>}
                <div className="account-popup-close dismiss" onClick={accountClick}>닫기</div>
            </div>
        </div>
    </>

}

export default accountModal;