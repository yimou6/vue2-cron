<template>
  <div class="v-cron">
    <el-tabs type="border-card" class="v-cron-tabs">
      <el-tab-pane label="秒">
        <div class="cron-row">
          <el-radio v-model="second.type" label="0">每秒</el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="second.type" label="1">周期从
            <el-input-number v-model="second.rangeStart"
                             size="mini"
                             :min="1"
                             :max="58"
                             controls-position="right"></el-input-number>
            到
            <el-input-number v-model="second.rangeEnd"
                             size="mini"
                             :min="second.rangeStart"
                             :max="59"
                             controls-position="right"></el-input-number>
            秒
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="second.type" label="2">从
            <el-input-number size="mini"
                             v-model="second.incrementStart"
                             :min="0"
                             :max="59"
                             controls-position="right"></el-input-number>
            秒开始,每
            <el-input-number size="mini"
                             v-model="second.incrementIncrement"
                             :min="0"
                             :max="59"
                             controls-position="right"></el-input-number>
            秒执行一次
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="second.type" label="3">指定(可多选)
            <el-select size="mini" v-model="second.specific" multiple collapse-tags filterable>
              <el-option v-for="num in 60" :key="num" :label="num - 1" :value="String(num - 1)"></el-option>
            </el-select>
          </el-radio>
        </div>
      </el-tab-pane>
      <el-tab-pane label="分">
        <div class="cron-row">
          <el-radio v-model="minute.type" label="0">每分钟</el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="minute.type" label="1">周期从
            <el-input-number v-model="minute.rangeStart"
                             size="mini"
                             :min="1"
                             :max="58"
                             controls-position="right"></el-input-number>
            到
            <el-input-number v-model="minute.rangeEnd"
                             size="mini"
                             :min="minute.rangeStart"
                             :max="59"
                             controls-position="right"></el-input-number>
            分钟
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="minute.type" label="2">从
            <el-input-number size="mini"
                             v-model="minute.incrementStart"
                             :min="0"
                             :max="59"
                             controls-position="right"></el-input-number>
            分钟开始,每
            <el-input-number size="mini"
                             v-model="minute.incrementIncrement"
                             :min="0"
                             :max="59"
                             controls-position="right"></el-input-number>
            分钟执行一次
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="minute.type" label="3">指定(可多选)
            <el-select size="mini" v-model="minute.specific" multiple collapse-tags filterable>
              <el-option v-for="num in 60" :key="num" :label="num - 1" :value="String(num - 1)"></el-option>
            </el-select>
          </el-radio>
        </div>
      </el-tab-pane>
      <el-tab-pane label="时">
        <div class="cron-row">
          <el-radio v-model="hour.type" label="0">每小时</el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="hour.type" label="1">周期从
            <el-input-number v-model="hour.rangeStart"
                             size="mini"
                             :min="0"
                             :max="23"
                             controls-position="right"></el-input-number>
            到
            <el-input-number v-model="hour.rangeEnd"
                             size="mini"
                             :min="hour.rangeStart"
                             :max="23"
                             controls-position="right"></el-input-number>
            小时
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="hour.type" label="2">从
            <el-input-number size="mini"
                             v-model="hour.incrementStart"
                             :min="0"
                             :max="23"
                             controls-position="right"></el-input-number>
            小时开始,每
            <el-input-number size="mini"
                             v-model="hour.incrementIncrement"
                             :min="1"
                             :max="23"
                             controls-position="right"></el-input-number>
            小时执行一次
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="hour.type" label="3">指定(可多选)
            <el-select size="mini" v-model="hour.specific" multiple collapse-tags filterable>
              <el-option v-for="num in 24" :key="num" :label="num - 1" :value="String(num - 1)"></el-option>
            </el-select>
          </el-radio>
        </div>
      </el-tab-pane>
      <el-tab-pane label="天">
        <div class="cron-row">
          <el-radio v-model="day.type" label="0">每日</el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="day.type" label="4">不指定</el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="day.type" label="1">周期从
            <el-input-number v-model="day.rangeStart"
                             size="mini"
                             :min="1"
                             :max="31"
                             controls-position="right"></el-input-number>
            到
            <el-input-number v-model="day.rangeEnd"
                             size="mini"
                             :min="day.rangeStart"
                             :max="31"
                             controls-position="right"></el-input-number>
            日
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="day.type" label="2">从
            <el-input-number size="mini"
                             v-model="day.incrementStart"
                             :min="1"
                             :max="31"
                             controls-position="right"></el-input-number>
            日开始,每
            <el-input-number size="mini"
                             v-model="day.incrementIncrement"
                             :min="1"
                             :max="31"
                             controls-position="right"></el-input-number>
            天执行一次
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="day.type" label="5">每月
            <el-input-number size="mini"
                             v-model="day.weekday"
                             :min="1"
                             :max="31"
                             controls-position="right"></el-input-number>
            日最近的那个工作日
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="day.type" label="6">本月最后一天</el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="day.type" label="3">指定(可多选)
            <el-select size="mini" v-model="day.specific" multiple collapse-tags filterable>
              <el-option v-for="num in 31" :key="num" :label="num - 1" :value="String(num - 1)"></el-option>
            </el-select>
          </el-radio>
        </div>
      </el-tab-pane>
      <el-tab-pane label="月">
        <div class="cron-row">
          <el-radio v-model="month.type" label="0">每月</el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="month.type" label="1">周期从
            <el-input-number v-model="month.rangeStart"
                             size="mini"
                             :min="1"
                             :max="12"
                             controls-position="right"></el-input-number>
            到
            <el-input-number v-model="month.rangeEnd"
                             size="mini"
                             :min="month.rangeStart"
                             :max="12"
                             controls-position="right"></el-input-number>
            月
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="month.type" label="2">从
            <el-input-number size="mini"
                             v-model="month.incrementStart"
                             :min="1"
                             :max="12"
                             controls-position="right"></el-input-number>
            日开始,每
            <el-input-number size="mini"
                             v-model="month.incrementIncrement"
                             :min="1"
                             :max="12"
                             controls-position="right"></el-input-number>
            月执行一次
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="month.type" label="3">指定(可多选)
            <el-select size="mini" v-model="month.specific" multiple collapse-tags filterable>
              <el-option v-for="num in 12" :key="num" :label="num" :value="String(num)"></el-option>
            </el-select>
          </el-radio>
        </div>
      </el-tab-pane>
      <el-tab-pane label="周">
        <div class="cron-row">
          <el-radio v-model="week.type" label="0">每周</el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="week.type" label="4">不指定</el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="week.type" label="1">周期从星期
            <el-input-number v-model="week.rangeStart"
                             size="mini"
                             :min="1"
                             :max="6"
                             controls-position="right"></el-input-number>
            到星期
            <el-input-number v-model="week.rangeEnd"
                             size="mini"
                             :min="week.rangeStart"
                             :max="7"
                             controls-position="right"></el-input-number>
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="week.type" label="2">第
            <el-input-number size="mini" v-model="week.incrementStart"
                             :min="1"
                             :max="7"
                             controls-position="right"></el-input-number>
            周的星期
            <el-input-number size="mini"
                             v-model="week.incrementIncrement"
                             :min="1"
                             :max="7"
                             controls-position="right"></el-input-number>
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="week.type" label="7">本月最后一个星期
            <el-input-number size="mini"
                             v-model="week.weekday"
                             :min="1"
                             :max="7"
                             controls-position="right"></el-input-number>
          </el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="week.type" label="3">指定(可多选)
            <el-select size="mini" v-model="week.specific" multiple collapse-tags filterable>
              <el-option v-for="num in 31" :key="num" :label="num - 1" :value="String(num - 1)"></el-option>
            </el-select>
          </el-radio>
        </div>
      </el-tab-pane>
      <el-tab-pane label="年">
        <div class="cron-row">
          <el-radio v-model="year.type" label="8">不指定</el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="year.type" label="0">每年</el-radio>
        </div>
        <div class="cron-row">
          <el-radio v-model="year.type" label="1">周期从
            <el-date-picker v-model="year.rangeStart"
                            size="mini"
                            type="year"
                            value="yyyy"
                            value-format="yyyy"
                            style="width: 100px"></el-date-picker>
            年到
            <el-date-picker v-model="year.rangeEnd"
                            size="mini"
                            type="year"
                            value="yyyy"
                            value-format="yyyy"
                            style="width: 100px"></el-date-picker>
            年
          </el-radio>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="v-cron-text">Cron表达式： <span>{{ text }}</span></div>
  </div>
</template>

<script>
export default {
  name: 'VCron',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      second: {
        type: '0',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 2,
        specific:[]
      },
      minute: {
        type: '0',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 2,
        specific:[]
      },
      hour: {
        type: '0',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 2,
        specific:[]
      },
      day: {
        type: '0',
        rangeStart: 1,
        rangeEnd: 2,
        incrementStart: 3,
        incrementIncrement: 5,
        weekday: '',
        specific: []
      },
      month: {
        type: '0',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 2,
        specific:[]
      },
      week: {
        type: '4',
        incrementStart: 3,
        incrementIncrement: 5,
        rangeStart: 1,
        rangeEnd: 2,
        weekday: '',
        specific:[]
      },
      year: {
        type: '0',
        rangeStart: new Date().getFullYear() + '',
        rangeEnd: new Date().getFullYear() + ''
      },
      keyMap: ['second', 'minute', 'hour', 'day', 'month', 'week', 'year'],
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function (val) {
        if (val) {
          const arr = val.split(' ')
          arr.forEach((val, index) => {
            this.transformationUi(val, this.keyMap[index])
          })
        }
      }
    },
    // 周与天互斥
    'week.type': function (val) {
      if (val !== '4' && this.day.type !== '4') {
        this.day.type = '4'
      }
      if (val === '4' && this.day.type === '4') {
        this.day.type = '0'
      }
    },
    // 天与周互斥
    'day.type': function (val) {
      if (val !== '4' && this.week.type !== '4') {
        this.week.type = '4'
      }
      if (val === '4' && this.week.type === '4') {
        this.week.type = '0'
      }
    }
  },
  computed: {
    text() {
      let s = this.transformationText('second')
      let m = this.transformationText('minute')
      let h = this.transformationText('hour')
      let d = this.transformationText('day')
      let M = this.transformationText('month')
      let w = this.transformationText('week')
      let y = this.transformationText('year')
      this.$emit('change', `${s} ${m} ${h} ${d} ${M} ${w} ${y}`)
      return `${s} ${m} ${h} ${d} ${M} ${w} ${y}`
    }
  },
  methods: {
    /**
     * @desc 将选项转换为cron表达式
     *    秒，分，时，月 一致
     *    天，周，年需要额外处理
     * @param dataKey
     * @return {string|string}
     */
    transformationText(dataKey) {
      switch (this[dataKey].type) {
        case '0':
          return '*'
        case '1':
          return this[dataKey].rangeStart + '-' + this[dataKey].rangeEnd
        case '2':
          return this[dataKey].incrementStart + '/' + this[dataKey].incrementIncrement
        case '3':
          return this[dataKey].specific.length > 0
              ? this[dataKey].specific.join(',')
              : '*'
        case '4':
          // 不指定日、周
          return '?'
        case '5':
          // 每月__日最近的那个工作日
          return this.day.weekday + 'W'
        case '6':
          // 本月最后一天
          return 'L'
        case '7':
          // 本月最后一个星期__
          return this.week.weekday + 'L'
        case '8':
          // 不指定年
          return ''
        default:
          return '*'
      }
    },
    /**
     * @desc 将表达式转换为ui obj
     * @param value {string} 表达式
     * @param key {'second'|'minute'|'hour'} 表达式key
     */
    transformationUi(value, key) {
      if (value.includes('*')) {
        this[key].type = '0'
      } else if (value.includes('-')) {
        this[key].type = '1'
        if (key === 'year') {
          this[key].rangeStart = value.split('-')[0] || new Date().getFullYear() + ''
          this[key].rangeEnd = value.split('-')[1] || new Date().getFullYear() + ''
        } else {
          this[key].rangeStart = parseInt(value.split('-')[0] || 1)
          this[key].rangeEnd = parseInt(value.split('-')[1] || 2)
        }
      } else if (value.includes('/')) {
        this[key].type = '2'
        this[key].incrementStart = parseInt(value.split('/')[0] || 1)
        this[key].incrementIncrement = parseInt(value.split('/')[1] || 2)
      } else if (value.includes(',') || !isNaN(parseInt(value))) {
        this[key].type = '3'
        this[key].specific = value.split(',')
      } else if (value.includes('?')) {
        this[key].type = '4'
      } else if (value.includes('W')) {
        this[key].type = '5'
        this[key].weekday = parseInt(value.replace('W', ''))
      } else if (value.includes('L')) {
        if (value === 'L') {
          this[key].type = '6'
        } else {
          this[key].type = '7'
          this[key].weekday = parseInt(value.replace('L', ''))
        }
      } else if (value === '') {
        this[key].type = '8'
      } else {
        this[key].type = '0'
      }
    }
  }
}
</script>

<style>
.v-cron {
  position: relative;
}
.v-cron-text {
  position: absolute;
  bottom: 1px;
  left: 1px;
  color: #333333;
  font-size: 15px;
  font-weight: 500;
  font-family: "Microsoft YaHei";
  width: calc(100% - 17px);
  background: #f5f7fa;
  padding-left: 15px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-top: 1px solid #e4e7ed;
}
.v-cron-text span {
  color: #666666;
  font-size: 14px;
}
.v-cron-tabs .el-tabs__content {
  padding-bottom: 40px!important;
}
.cron-row {
  margin-bottom: 10px;
}
</style>
