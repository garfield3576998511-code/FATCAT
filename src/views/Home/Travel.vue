<template>
  <div class="box">
    <div>
      <header>
        <div class="hd-bar">
          <div class="private">私人订制</div>
          <div class="bg"></div>
          <div class="firm">企业定制</div>
        </div>
      </header>

      <div class="container">
        <!-- 下方免费获取方案 -->
        <div class="form-box">
          <van-form class="form">
            <van-cell-group inset class="form-ipt">
              <van-field
                class="ipt"
                v-model="cityName"
                placeholder="目的地(必填)"
                right-icon="arrow-down"
              />
              <van-field
                class="ipt"
                v-model="date"
                placeholder="预计出游时间(非必填)"
                right-icon="arrow-down"
              />
              <van-field
                class="ipt"
                v-model="name"
                placeholder="您的姓名(非必填)"
              />
            </van-cell-group>

            <van-button
              color="#C14374"
              block="true"
              type="primary"
              native-type="submit"
            >
              免费获取方案
            </van-button>

            <ul class="text">
              <li><i class="iconfont dingzhi"></i> 1V1专属定制</li>
              <li><i class="iconfont -fanganguanli"></i> 2小时极速方案</li>
              <li><i class="iconfont aixin"></i> 7*24H行中服务</li>
            </ul>
          </van-form>
        </div>
        <div class="boxss">
          <p>10项专属定制服务</p>
          <ul>
            <li>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE1IDdhLjUuNSAwIDAwLS41LjV2MWEuNS41IDAgMTAxIDB2LTFBLjUuNSAwIDAwMTUgN3pNMTUgMTAuNWEuNS41IDAgMDAtLjUuNXYxYS41LjUgMCAxMDEgMHYtMWEuNS41IDAgMDAtLjUtLjV6TTE1IDE0YS41LjUgMCAwMC0uNS41djFhLjUuNSAwIDEwMSAwdi0xYS41LjUgMCAwMC0uNS0uNXpNMTUgMTcuNWEuNS41IDAgMDAtLjUuNXYxYS41LjUgMCAxMDEgMHYtMWEuNS41IDAgMDAtLjUtLjV6IiBmaWxsPSIjQzE0Mzc0IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNMSAxNi44NzVBNCA0IDAgMDA0IDEzYTQgNCAwIDAwLTMtMy44NzUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTIzLjUgNWEuNS41IDAgMDAtLjUtLjVoLTEuNDdsLTEtMy43MDVBLjUzLjUzIDAgMDAyMC4zMDUuNWEuNS41IDAgMDAtLjM4LS4wNUw0Ljc4NSA0LjVIMWEuNS41IDAgMDAtLjUuNXY0LjEyNWEuNS41IDAgMTAxIDBWNS41aDIxdjMuMjU1YTQuNSA0LjUgMCAwMDAgOC41VjIwLjVoLTIxdi0zLjYyNWEuNS41IDAgMTAtMSAwVjIxYS41LjUgMCAwMC41LjVoMjJhLjUuNSAwIDAwLjUtLjV2LTQuMTI1LS4wMzUtLjFhLjY3LjY3IDAgMDAtLjAzNS0uMDlsLS4wNS0uMDc1YS40My40MyAwIDAwLS4wNjUtLjA3LjI2NS4yNjUgMCAwMC0uMDc1LS4wNTVsLS4wOS0uMDQ1YS4wNzUuMDc1IDAgMDEtLjAzNSAwIDMuNSAzLjUgMCAwMTAtNi43OC4wNzUuMDc1IDAgMDEuMDM1IDBsLjA5LS4wNDVhLjI2NS4yNjUgMCAwMC4wNzUtLjA1NS40My40MyAwIDAwLjA2NS0uMDdsLjA1LS4wNzVhLjY3LjY3IDAgMDAuMDM1LS4wOXYtLjFWNXptLTMuOC0zLjQ2bC44IDIuOTZIOC42NDVMMTkuNyAxLjU0eiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg=="
                alt=""
              />
              <p>往返机票</p>
            </li>
            <li>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTcgMjNhLjUuNSAwIDAxLS41LS41di04YS41LjUgMCAxMTEgMHY4YS41LjUgMCAwMS0uNS41eiIgZmlsbD0iI0MxNDM3NCIvPjxwYXRoIGQ9Ik0xMSAyMy41YTU5LjU3NSA1OS41NzUgMCAwMS0xMC4xLTEgLjUuNSAwIDAxLS40LS41VjVhLjUuNSAwIDAxLjM0LS40NzVsMTItNGEuNS41IDAgMDEuNDUuMDcuNS41IDAgMDEuMjEuNDA1djIxLjRjMi44NTUtLjIwNSA1LjkxLS42NTUgNy0uODI1VjExLjMxbC0zLjcyNS0xLjg2NWEuNS41IDAgMTEuNDUtLjg5bDQgMkEuNS41IDAgMDEyMS41IDExdjExYS41LjUgMCAwMS0uNDIuNWMtLjI0NS4wMzUtNi4wOCAxLTEwLjA4IDF6bS05LjUtMS45MTVhNTguMiA1OC4yIDAgMDA5LjUuOTE1Yy40NzUgMCAxIDAgMS41LS4wNFYxLjY5NUwxLjUgNS4zNnYxNi4yMjV6IiBmaWxsPSIjMzMzIi8+PC9nPjwvc3ZnPg=="
                alt=""
              />
              <p>精选酒店</p>
            </li>
            <li>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMXB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiMzMzMiIGQ9Ik0yMSAyMGgtNXYtMkg2djJIMXYtOUw0IDFoMTRsMyAxMHoiLz48cGF0aCBzdHJva2U9IiMzMzMiIGQ9Ik0yMiA3bC0yLjA1LjVIMi4wNUwwIDciLz48cGF0aCBzdHJva2U9IiNDMTQzNzQiIGQ9Ik04IDE0SDRNMTggMTRoLTQiLz48L2c+PC9zdmc+"
                alt=""
              />
              <p>目的地交通</p>
            </li>
            <li>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTIxLjE3IDUuNjk1bC01Ljc5NS0xLjU1YS41LjUgMCAwMC0uNjE1LjM1NWwtMS41NSA1Ljc4TDEyIDE0Ljg3YS41LjUgMCAwMC4zMzUuNjNoLjEzYS41LjUgMCAwMC41LS4zN2wxLjE3LTQuMzc1IDcuMTctNC4xNGEuNS41IDAgMDAtLjEyLS45MmgtLjAxNXptLTYuNjcgMy42OWwxLjExNS00LjE0NSA0LjE0NSAxLjExLTUuMjYgMy4wMzV6IiBmaWxsPSIjQzE0Mzc0Ii8+PHBhdGggZD0iTTE1LjUgMTQuNWgtMTFBNC41IDQuNSAwIDAwMCAxOXY0YS41LjUgMCAwMC41LjVoMTlhLjUuNSAwIDAwLjUtLjV2LTRhNC41IDQuNSAwIDAwLTQuNS00LjV6bTMuNSA4SDFWMTlhMy41IDMuNSAwIDAxMy41LTMuNWgxMUEzLjUgMy41IDAgMDExOSAxOXYzLjV6TTkuNSAxMy41QTQuNSA0LjUgMCAwMDE0IDlWNWE0LjUgNC41IDAgMTAtOSAwdjRhNC41IDQuNSAwIDAwNC41IDQuNXpNNiA1YTMuNSAzLjUgMCAwMTcgMHY0YTMuNSAzLjUgMCAwMS03IDBWNXoiIGZpbGw9IiMzMzMiLz48L2c+PC9zdmc+"
                alt=""
              />
              <p>中文导游</p>
            </li>
            <li>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5IDE4LjVIM2ExLjUgMS41IDAgMDEwLTNoNGEuNS41IDAgMTAwLTFIM2EyLjUgMi41IDAgMTAwIDVoMTZhMS41IDEuNSAwIDAxMCAzaC00YS41LjUgMCAxMDAgMWg0YTIuNSAyLjUgMCAxMDAtNXoiIGZpbGw9IiNDMTQzNzQiLz48cGF0aCBkPSJNMTEgLjVBNy41IDcuNSAwIDAwMy41IDhjMCA0LjA0NSA2Ljg4IDEwLjEyIDcuMTcgMTAuMzc1YS41LjUgMCAwMC42NiAwYy4yOS0uMjU1IDcuMTctNi4zMyA3LjE3LTEwLjM3NUE3LjUgNy41IDAgMDAxMSAuNXptMCAxNi44MjVDOS42MzUgMTYuMDcgNC41IDExLjEzNSA0LjUgOGE2LjUgNi41IDAgMDExMyAwYzAgMy4xMzUtNS4xMzUgOC4wNy02LjUgOS4zMjV6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTExIDQuNWEzLjUgMy41IDAgMTAwIDcgMy41IDMuNSAwIDAwMC03em0wIDZhMi41IDIuNSAwIDExMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMzMzMiLz48L2c+PC9zdmc+"
                alt=""
              />
              <p>行程设计</p>
            </li>
            <li>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTE1IDIyYS41LjUgMCAwMS0uNS0uNSAzLjUgMy41IDAgMDAtNyAwIC41LjUgMCAxMS0xIDAgNC41IDQuNSAwIDExOSAwIC41LjUgMCAwMS0uNS41eiIgZmlsbD0iI0MxNDM3NCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggc3Ryb2tlPSIjMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0wIDIxLjVIMjIiLz48cGF0aCBkPSJNMTUgOUg3YS41LjUgMCAwMTAtMWg4YS41LjUgMCAxMTAgMXpNMTcgMTJINWEuNS41IDAgMTEwLTFoMTJhLjUuNSAwIDExMCAxek0xMi41IDZoLTNhLjUuNSAwIDAxLS41LS41VjRhMiAyIDAgMTE0IDB2MS41YS41LjUgMCAwMS0uNS41ek0xMCA1aDJWNGExIDEgMCAwMC0yIDB2MXoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik0xMSAzYS41LjUgMCAwMS0uNS0uNXYtMmEuNS41IDAgMTExIDB2MmEuNS41IDAgMDEtLjUuNXpNMjEuMjQ1IDIyYS41LjUgMCAwMS0uMjctLjA4QTE5LjQ0IDE5LjQ0IDAgMDExMiA1LjVhLjUuNSAwIDAxMSAwIDE4LjQ1IDE4LjQ1IDAgMDA4LjUgMTUuNTguNS41IDAgMDEtLjI1NS45MnpNLjc1NSAyMmEuNS41IDAgMDEtLjI1NS0uOTJBMTguNDUgMTguNDUgMCAwMDkgNS41YS41LjUgMCAxMTEgMCAxOS40NCAxOS40NCAwIDAxLTguOTc1IDE2LjQyLjUuNSAwIDAxLS4yNy4wOHoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4="
                alt=""
              />
              <p>特色体验</p>
            </li>
            <li>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgLjVDNi4yMDEuNSAxLjUgNS4yMDEgMS41IDExdjdBMi41IDIuNSAwIDAwNCAyMC41aDJBMi41IDIuNSAwIDAwOC41IDE4di01QTIuNSAyLjUgMCAwMDYgMTAuNUgyLjUyNWE5LjUgOS41IDAgMDExOC45NzUgMEgxOGEyLjUgMi41IDAgMDAtMi41IDIuNXY1YTIuNSAyLjUgMCAwMDIuNSAyLjVoMS4xMkE5LjQwNSA5LjQwNSAwIDAxMTQgMjJhLjUuNSAwIDEwMCAxYy4zNyAwIC43MjUgMCAxLjA0NS0uMDVhMTAuNDA1IDEwLjQwNSAwIDAwNi4wNDUtMi43MUEyLjUgMi41IDAgMDAyMi41IDE4di03QzIyLjUgNS4yMDEgMTcuNzk5LjUgMTIgLjV6TTcuNSAxM3Y1QTEuNSAxLjUgMCAwMTYgMTkuNUg0QTEuNSAxLjUgMCAwMTIuNSAxOHYtNi41SDZBMS41IDEuNSAwIDAxNy41IDEzem0xMy4xMiA2LjM2aC0uMDNhMS40NSAxLjQ1IDAgMDEtLjU5LjE0aC0yYTEuNSAxLjUgMCAwMS0xLjUtMS41di01YTEuNSAxLjUgMCAwMTEuNS0xLjVoMy41VjE4YTEuNSAxLjUgMCAwMS0uODggMS4zNnoiIGZpbGw9IiMzMzMiLz48cmVjdCBmaWxsPSIjQzE0Mzc0IiB4PSIxMiIgeT0iMjEuNzUiIHdpZHRoPSIzIiBoZWlnaHQ9IjEuNSIgcng9IjAuNzUiLz48L2c+PC9zdmc+"
                alt=""
              />
              <p>旅游管家</p>
            </li>
            <li>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE2IDE5LjVINmEuNS41IDAgMTEwLTFoMTBhLjUuNSAwIDExMCAxeiIgZmlsbD0iI0MxNDM3NCIvPjxwYXRoIGQ9Ik0yMSAuNUgxYS41LjUgMCAwMC0uNS41djIyYS41LjUgMCAwMC41LjVoMjBhLjUuNSAwIDAwLjUtLjVWMWEuNS41IDAgMDAtLjUtLjV6bS0uNSAyMmgtMTl2LTIxaDE5djIxeiIgZmlsbD0iIzMzMyIvPjxwYXRoIGQ9Ik0xMSAxNS41YTUuNSA1LjUgMCAxMDAtMTEgNS41IDUuNSAwIDAwMCAxMXptLTQuNDctNWgyYTkuMzA1IDkuMzA1IDAgMDAuODMgMy42OCA0LjUgNC41IDAgMDEtMi44My0zLjY4em00LjQ3LTVjLjU3NSAwIDEuMzkgMS41NCAxLjUgNGgtM2MuMTEtMi40Ni45MjUtNCAxLjUtNHptMS41IDVjLS4xIDIuNDYtLjkxNSA0LTEuNSA0cy0xLjM5LTEuNTQtMS41LTRoM3ptLjE3IDMuNjhhOS4zMDUgOS4zMDUgMCAwMC44My0zLjY4aDJhNC41IDQuNSAwIDAxLTIuODQgMy42OGguMDF6bTIuOC00LjY4SDEzLjVhOS4zMDUgOS4zMDUgMCAwMC0uODMtMy42OCA0LjUgNC41IDAgMDEyLjggMy42OHpNOS4zNCA1LjgyQTkuMzA1IDkuMzA1IDAgMDA4LjUgOS41aC0yYTQuNSA0LjUgMCAwMTIuODQtMy42OHoiIGZpbGw9IiMzMzMiLz48L2c+PC9zdmc+"
                alt=""
              />
              <p>签证</p>
            </li>
            <li>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyNHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjIuMTQ1IDMuNWwtMTAtM2EuNTcuNTcgMCAwMC0uMjkgMGwtMTAgM0EuNS41IDAgMDAxLjUgNHY4YzAgNi4zMTUgOS44NiAxMS4yNCAxMC4yOCAxMS40NWEuNS41IDAgMDAuNDQgMGMuNDItLjIxIDEwLjI4LTUuMTM1IDEwLjI4LTExLjQ1VjRhLjUuNSAwIDAwLS4zNTUtLjV6TTIxLjUgMTJjMCA1LjIxLTguMDUgOS42NzUtOS41IDEwLjQ0LTEuNDUtLjc2NS05LjUtNS4yMy05LjUtMTAuNDRWNC4zN0wxMiAxLjVsOS41IDIuODVWMTJ6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTExLjUgOHY4YS41LjUgMCAxMDEgMFY4YS41LjUgMCAxMC0xIDB6IiBmaWxsPSIjMzMzIi8+PGNpcmNsZSBmaWxsPSIjQzE0Mzc0IiBjeD0iMTIiIGN5PSI5IiByPSIxLjUiLz48L2c+PC9zdmc+"
                alt=""
              />
              <p>保险</p>
            </li>
            <li>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxN3B4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5IDkuNTU1YS41LjUgMCAwMS0uMzU1LS44NWwzLjY0LTMuNjQ1Yy01Ljc5Mi01LjQwNS0xNC43NzgtNS40MDUtMjAuNTcgMGwzLjY0IDMuNjQ1YS41LjUgMCAxMS0uNzEuNzA1bC00LTRhLjUuNSAwIDAxMC0uNzA1YzYuMjc2LTYuMjYgMTYuNDM0LTYuMjYgMjIuNzEgMGEuNS41IDAgMDEwIC43MDVsLTQgNGEuNS41IDAgMDEtLjM1NS4xNDV6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTE5IDkuNTU1YS41LjUgMCAwMS0uMzU1LS4xNDUgOS40MDUgOS40MDUgMCAwMC0xMy4yOSAwIC41LjUgMCAxMS0uNzEtLjcwNWM0LjA2NS00LjA1NSAxMC42NDUtNC4wNTUgMTQuNzEgMGEuNS41IDAgMDEtLjM1NS44NXpNMTUgMTMuNTU1YS41LjUgMCAwMS0uMzU1LS4xNDUgMy43NCAzLjc0IDAgMDAtNS4yOSAwIC41LjUgMCAxMS0uNzEtLjcwNSA0Ljc0NSA0Ljc0NSAwIDAxNi43MSAwIC41LjUgMCAwMS0uMzU1Ljg1eiIgZmlsbD0iI0MxNDM3NCIvPjxwYXRoIGQ9Ik0xMiAxNi41NTVhLjUuNSAwIDAxLS4zNTUtLjE0NWwtMTEtMTFhLjUuNSAwIDExLjcxLS43MDVMMTIgMTUuMzUgMjIuNjQ1IDQuNzA1YS41LjUgMCAxMS43MS43MDVsLTExIDExYS41LjUgMCAwMS0uMzU1LjE0NXoiIGZpbGw9IiMzMzMiLz48L2c+PC9zdmc+"
                alt=""
              />
              <p>随身WIFI</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { getTailor } from "@/Api";

let cityName = ref([]);
let date = ref();
let name = ref();

// 10项专属服务的列表数据
let serviceList = ref([
  { icon: "iconfont icon-xingxing", text: "往返机票" },
  { icon: "iconfont icon-xingxing", text: "精选酒店" },
  { icon: "iconfont icon-xingxing", text: "目的地交通" },
  { icon: "iconfont icon-xingxing", text: "中文导游" },
  { icon: "iconfont icon-xingxing", text: "行程设计" },
  { icon: "iconfont icon-xingxing", text: "特色体验" },
  { icon: "iconfont icon-xingxing", text: "旅行管家" },
  { icon: "iconfont icon-xingxing", text: "签证" },
  { icon: "iconfont icon-xingxing", text: "保险" },
  { icon: "iconfont icon-xingxing", text: "随身WiFi" },
]);
// 存 私人订制  数据
let TailorData = ref([]);
let masterId = ref([]);
let list = reactive([]);
let idList = ref([]);
// 定制师 id
let getData = async () => {
  let { data } = await getTailor();
  const payload = data?.data?.data ?? [];
  console.log(payload);
  TailorData.value = payload;
};
getData();
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 15.2rem;
  overflow: auto;
  header {
    height: 3.6rem;
    background: center no-repeat
      url(https://product-ssl-qiniu.bmtrip.com/product_5e996d1a5a1e2.jpg?imageView2/4/w/750/h/360/format/jpg/interlace/1/q/80);
    background-size: 100% 100%;
    position: relative;
    .hd-bar {
      width: 6.8rem;
      height: 1rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;

      .private {
        width: 3.4rem;
        border-radius: 0.1rem 0 0 0;
        line-height: 1rem;
        color: #c14374;
        font-size: 0.26rem;
        position: relative;
        background: #ffffff;
        text-align: center;
      }

      .firm {
        width: 3.4rem;
        line-height: 1rem;
        font-size: 2.6rem;
        color: #fff;
        letter-spacing: 0.02133rem;
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        border-radius: 0 0.1rem 0 0;
        font-size: 0.32rem;
      }
    }
  }
  .container {
    margin: 0 auto;
    .boxss {
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.3rem;
      font-size: 0.32rem;
      margin-top: 0.3rem;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.3rem;

        li {
          width: 1.6rem;
          height: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0.3rem 0.2rem;
        }
      }
    }
    .form-box {
      height: 6rem;
      width: 6.8rem;
      margin: 0 auto;
      box-shadow: 0 0 0.21333rem 0 rgb(0 0 0 / 8%);
      border-radius: 0 0 0.08rem 0.08rem;

      .form {
        width: 6.03rem;
        height: 6rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        padding-bottom: 0.5rem;

        .form-ipt {
          width: 6rem;

          height: 3rem;
          margin: 0;
          .ipt {
            width: 100%;
            line-height: 0.47rem;
            margin: 0;
            padding: 0;
            border-bottom: 0.01rem solid #ccc;
            height: 1rem;
            font-size: 0.28rem;
            line-height: 1rem;
            font-weight: 100;
          }
        }
        .text {
          height: 0.16rem;
          display: flex;
          justify-content: space-between;
          li {
            display: flex;
            align-items: center;
            font-size: 0.12rem;
            color: #898989;
            i {
              font-size: 0.1rem;
            }
          }
        }
      }
    }
    .service {
      width: 6.39rem;
      height: 1.84rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h6 {
        text-align: center;
        color: #333333;
        font-size: 0.13rem;
        margin: 0.3rem 0 0.2rem 0;
      }
      ul {
        width: 3.39rem;
        height: 1.08rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 3.678em;
          height: 0.44rem;
          color: #898989;
          display: flex;
          flex-direction: column;
          align-items: center;
          i {
            font-size: 0.3rem;
          }
          span {
            font-size: 0.12rem;
            white-space: nowrap;
          }
        }
      }
    }
    .hot-city {
      width: 6.8rem;
      height: 6.8rem;
      margin: 0.2rem auto;
      .swipe {
        height: 6.8rem;
        .van-swipe-item {
          .van-swipe__indicators {
            opacity: 0;
          }
          img {
            width: 3.39rem;
            height: 3.39rem;
            display: block;
          }
        }
      }
    }
    .master {
      height: 6rem;
    }
  }
}
</style>
