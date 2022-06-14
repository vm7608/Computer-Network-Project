import './Team.css';

function Team() {
    return (
        <div className="Team">
            <table class = "about">
                <tr>
                    <th>Họ và tên</th>
                    <th>MSSV</th>
                    <th>Lớp sinh hoạt</th>
                    <th>Lớp học phần</th>
                </tr>
                <tr>
                    <td>Cao Kiều Văn Mạnh</td>
                    <td>102200270</td>
                    <td>20TCLC_KHDL</td>
                    <td>20.11</td>
                </tr>
                <tr>
                    <td>Võ Hoàng Bảo</td>
                    <td>102200246</td>
                    <td>20TCLC_KHDL</td>
                    <td>20.11</td>
                </tr>
                <tr>
                    <td>Lê Văn An</td>
                    <td>102200242</td>
                    <td>20TCLC_KHDL</td>
                    <td>20.11</td>
                </tr>
            </table>
        </div>
    );
}

export default Team;